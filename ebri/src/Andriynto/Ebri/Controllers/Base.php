<?php namespace Andriynto\Ebri\Controllers;

use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Request;

use Andriynto\Api\OAuth2\Models\OauthClient;

class Base extends Controller
{

	/**
     * The Option.
     *
     * @var Option
     */
    protected $option;

    /**
     * The Locale.
     *
     * @var Locale
     */
    protected $locale;

    /**
     * The API client credentials.
     *
     * @var string
     */
    protected $clientId;
    protected $clientSecret;

    /**
     * The current API access token.
     *
     * @var string
     */
    protected $accessToken;

    /**
     * The current API refresh token.
     *
     * @var string
     */
    protected $refreshToken;

    /**
    * The Collection.
    *
    * @var collection
    */
    protected $collection;

    /**
    * The Template.
    *
    * @var Template
    */
    protected $template;

    /**
     * The API base information.
     *
     * @var string
     */
    protected $apiBaseUrl = '';
    protected $apiVersion = 'v1';
    protected $apiUrl     = '';
    protected $apiScope   = 'read,write';

    /**
     * Default options for curl.
     *
     * @var array
     */
    protected static $curlOptions = array(
        CURLOPT_CONNECTTIMEOUT => 10,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT        => 60,
        CURLOPT_USERAGENT      => 'kotakin-php-2'
    );

    /**
     * Create a new instance.
     *
     * @return void
     */
	public function __construct()
	{
		//Set API base url if empty
		if( empty($this->apiBaseUrl))
		{
			$this->apiBaseUrl = URL::to('/');
		}

		//Set API url if empty
		if( empty($this->apiUrl))
		{
			$this->apiUrl = $this->apiBaseUrl.'/api/'.$this->apiVersion;
		}

		//Get the webste OAuth Client credentials
		$oauthClient = OauthClient::where('name', '=', 'website')->first();

		if(is_object($oauthClient))
		{
			$this->clientId 	= $oauthClient->id;
			$this->clientSecret = $oauthClient->secret; 
		}

		unset($oauthClient);

		Blade::extend(function($view) {
            return preg_replace(array(
                '#@translate\(\s*\"([^"]+)\"\s*\)#', 
                "#@translate\(\s*\'([^']+)\'\s*\)#"
            ), array(
                'Translate::t("$1")', 
                'Translate::t(\'$1\')'
            ), $view);
        });

        Blade::extend(function($view) {
            return preg_replace(array(
                '#@option\(\s*\"([^"]+)\"\s*\)#', 
                "#@option\(\s*\'([^']+)\'\s*\)#"
            ), array(
                'Option::getAttribute(\'$1\')', 
                'Option::getAttribute(\'$1\')'
            ), $view);
        });

        Blade::extend(function($view) {
            return preg_replace(array(
                '#@hasPermission\(\s*\"([^"]+)\"\s*\)#', 
                "#@hasPermission\(\s*\'([^']+)\'\s*\)#"
            ), array(
                'Access::has(\'$1\')', 
                'Access::has(\'$1\')'
            ), $view);
        });

        $this->getAccessToken();

        View::share('basePath', Request::getBaseURL());
	}

	public function getClientSecret()
	{
		return $this->clientSecret;
	}

	public function getAccessToken()
	{
		if(is_null($this->accessToken))
			$this->accessToken = Cookie::get('ebriat');

		if(is_null($this->refreshToken))
			$this->refreshToken = Cookie::get('ebrirt');

		if(is_null($this->accessToken) and is_null($this->refreshToken))
			$this->requestAccessToken();

		if(! is_null($this->refreshToken))
			$this->requestRefreshToken();

		return $this->accessToken;
	}

	private function requestAccessToken()
    {
        $ch = curl_init();

        $params = array(
            'grant_type'    => 'client_credentials',
            'client_id'     => $this->clientId,
            'client_secret' => $this->clientSecret,
            'scope'         => $this->apiScope,
            'redirect_uri'  => $this->apiBaseUrl
        );

        $opts = self::$curlOptions;
        $opts[CURLOPT_URL] = $this->apiBaseUrl.'/authorizations';
        $opts[CURLOPT_HTTPHEADER] = array(
            'Content-MD5: '.md5(http_build_query($params).$this->clientSecret)
        );
        $opts[CURLOPT_POSTFIELDS] = $params;

        curl_setopt_array($ch, $opts);
        $result = curl_exec($ch);

        if (curl_errno($ch) == 60) { // CURLE_SSL_CACERT
            Log::error('Invalid or no certificate authority found, now trying using bundled information : '.storage_path() . '/ca_chain_bundle.crt');
            // curl_setopt($ch, CURLOPT_CAINFO, storage_path() . '/ca_chain_bundle.crt');
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
            $result = curl_exec($ch);
        }

        // With dual stacked DNS responses, it's possible for a server to
        // have IPv6 enabled but not have IPv6 connectivity.  If this is
        // the case, curl will try IPv4 first and if that fails, then it will
        // fall back to IPv6 and the error EHOSTUNREACH is returned by the
        // operating system.
        if ($result === false && empty($opts[CURLOPT_IPRESOLVE])) {
            $matches = array();
            $regex = '/Failed to connect to ([^:].*): Network is unreachable/';

            if (preg_match($regex, curl_error($ch), $matches)) {
                if (strlen(@inet_pton($matches[1])) === 16) {
                    Log::error('Invalid IPv6 configuration on server, please disable or get native IPv6 on your server.');

                    self::$curlOptions[CURLOPT_IPRESOLVE] = CURL_IPRESOLVE_V4;
                    curl_setopt($ch, CURLOPT_IPRESOLVE, CURL_IPRESOLVE_V4);
                    $result = curl_exec($ch);
                }
            }

            unset($matches);
        }

        $httpStatus = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        
        if ($httpStatus == 200) {
            $result = json_decode($result);

            // save access token information to cookie
            $this->accessToken = $result->access_token;

            Cookie::queue('ebriat', $result->access_token, ($result->expires_in / 60));
        }

        unset($result);

        curl_close($ch);
    }

    private function requestRefreshToken()
    {
        $ch = curl_init();

        $params = array(
            'grant_type'    => 'refresh_token',
            'refresh_token' => $this->refreshToken,
            'client_id'     => $this->clientId,
            'client_secret' => $this->clientSecret,
            'state'         => time()
        );

        $params = json_encode($params);

        $opts = self::$curlOptions;
        $opts[CURLOPT_URL] = $this->apiBaseUrl.'/authorizations';
        $opts[CURLOPT_HTTPHEADER] = array(
            'Content-MD5: '.md5($params.$this->clientSecret), 
            'Content-Type: application/json'
        );
        $opts[CURLOPT_POSTFIELDS] = $params;

        curl_setopt_array($ch, $opts);
        $result = curl_exec($ch);

        if (curl_errno($ch) == 60) { // CURLE_SSL_CACERT
            Log::error('Invalid or no certificate authority found, now trying using bundled information : '.storage_path() . '/ca_chain_bundle.crt');
            // curl_setopt($ch, CURLOPT_CAINFO, storage_path() . '/ca_chain_bundle.crt');
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
            $result = curl_exec($ch);
        }

        // With dual stacked DNS responses, it's possible for a server to
        // have IPv6 enabled but not have IPv6 connectivity.  If this is
        // the case, curl will try IPv4 first and if that fails, then it will
        // fall back to IPv6 and the error EHOSTUNREACH is returned by the
        // operating system.
        if ($result === false && empty($opts[CURLOPT_IPRESOLVE])) {
            $matches = array();
            $regex = '/Failed to connect to ([^:].*): Network is unreachable/';

            if (preg_match($regex, curl_error($ch), $matches)) {
                if (strlen(@inet_pton($matches[1])) === 16) {
                    Log::error('Invalid IPv6 configuration on server, please disable or get native IPv6 on your server.');

                    self::$curlOptions[CURLOPT_IPRESOLVE] = CURL_IPRESOLVE_V4;
                    curl_setopt($ch, CURLOPT_IPRESOLVE, CURL_IPRESOLVE_V4);
                    $result = curl_exec($ch);
                }
            }

            unset($matches);
        }

        $httpStatus = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        
        if ($httpStatus == 200) {
            $result = json_decode($result);

            // save tokens information to cookie
            $this->accessToken = $result->access_token;

            Cookie::queue('ebriat', $result->access_token, ($result->expires_in / 60));
        }

        unset($result);

        curl_close($ch);
    }

    /**
     * The Collection.
     *
     * @var Collection
     */
    public function getCollection()
    {
        if(is_null($this->collection)) {
            $this->collection = App::make('ebri.services');
        }

        return $this->collection;
    }

    /**
     * The the Template.
     *
     * @var Template
     */
    public function getTemplate()
    {
        if (is_null($this->template)) {
            $this->template = App::make('ebri.template');
        }

        return $this->template;
    }

}