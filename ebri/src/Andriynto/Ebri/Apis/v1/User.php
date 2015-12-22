<?php
namespace Andriynto\Ebri\Apis\v1;

use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Config;

use Andriynto\Api\Api as ApiServer;
use Andriynto\Api\OAuth2\Repositories\FluentSession;

use Andriynto\Ebri\Models\UserMeta;

use Cartalyst\Sentry\Sentry;
use Mews\Purifier\Purifier;

use Andriynto\Ebri\Supports\Str;

use Andriynto\Ebri\Templates\User as UserViewTemplate;
use Andriynto\Ebri\Apis\v1\Templates\User as UserTemplate;

use Andriynto\Api\Oauth2\Model\OauthClientEndpoint;

class User
{
	/**
     * The Api Server.
     *
     * @var Api
     */
    protected $apiServer;

    /**
     * The Sentry.
     *
     * @var Sentry
     */
    protected $sentry;

    /**
     * The current User.
     *
     * @var User
     */
    protected $user;

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
     * The Current User.
     *
     * @var User
     */
    protected $userMetas;

	/**
     * The user validation rules.
     *
     * @var array
     */
    protected $validationRules = array(
        'email'     => 'required|email|email_available',
        'password'  => 'required',
        'group'     => 'required|group_not_available',
        'activated' => 'required'
    );

    /**
     * The user activation validation rules.
     *
     * @var array
     */
    protected $activateValidationRules = array(
        'email'    => 'required|email',
        'username' => 'required|username_available'
    );

    /**
     * The user metadata validation rules.
     *
     * @var array
     */
    protected $metaValidationRules = array(
        'username'    => 'required|username_available'
    );

    /**
     * The protected fields.
     *
     * @var array
     */
    protected $protectedFields = array(
        'activated'
    );

    /**
     * The protected metadata fields.
     *
     * @var array
     */
    protected $protectedMetaFields = array(
        'max_upload_size', 
        'allowed_file_types',
        'quota',
        'quota_used'
    );

    /**
     * Create a new instance
     *
     * @param ApiServer $apiServer
     * @param Sentry $sentry
     * @return void
     */
    public function __construct(ApiServer $apiServer, Sentry $sentry)
    {
    	$this->apiServer 	= $apiServer;
    	$this->sentry 		= $sentry;
    }


	/**
	* Return the Api Server
	*
	* @return ApiServer
	*/
	public function getApiServer()
	{
		return $this->apiServer;
	}


	/**
	* Return the Sentry
	*
	* @return Sentry
	*/
	public function getSentry()
	{
		return $this->sentry;
	}

    /**
     * The the option.
     *
     * @var Option
     */
    public function getOption()
    {
        if (is_null($this->option)) {
            $this->option = App::make('ebri.option');
        }

        return $this->option;
    }

    /**
     * The the Locale.
     *
     * @var locale
     */
    public function getLocale()
    {
        if (is_null($this->locale)) {
            $this->locale = App::make('ebri.locale');
        }

        return $this->locale;
    }

    /**
     * Return the current User.
     *
     * @return User
     */
    public function getUser()
    {
        if ( ! is_object($this->user)) {
            try {
                $this->user = $this->getSentry()->getUser();
            } catch (\Cartalyst\Sentry\Users\UserNotFoundException $e) {}
        }

        return $this->user;
    }

	/**
     * Handle logging in a user.
     *
     * @return Response
     */
    public function login()
    {
        $status = 401;

        $input = $this->getUserInput();

        $remember = (isset($input['remember'])) ? true : false;

        try
        {
            // Set login credentials
            $credentials = array(
                'email'    => $this->getApiServer()->getRequest()->getUser(), 
                'password' => $this->getApiServer()->getRequest()->getPassword()
            );

            // Try to authenticate the user
            $response = $this->getSentry()->authenticate($credentials, false);
            $status   = 200;
        }
        catch (\Cartalyst\Sentry\Users\LoginRequiredException $e)
        {
            $response = array(
                'message' => $this->getLocale()->t('Provided information is not valid.'),
                'errors'  => array(
                    array(
                        'field'   => 'email',
                        'message' => $this->getLocale()->t('Login field is required.')
                    )
                )
            );
        }
        catch (\Cartalyst\Sentry\Users\PasswordRequiredException $e)
        {
            $response = array(
                'message' => $this->getLocale()->t('Provided information is not valid.'),
                'errors'  => array(
                    array(
                        'field'   => 'password',
                        'message' => $this->getLocale()->t('Password field is required.')
                    )
                )
            );
        }
        catch (\Cartalyst\Sentry\Users\WrongPasswordException $e)
        {
            $response = array(
                'message' => $this->getLocale()->t('Provided information is not valid.'),
                'errors'  => array(
                    array(
                        'field'   => 'password',
                        'message' => $this->getLocale()->t('Wrong password, try again.')
                    )
                )
            );
        }
        catch (\Cartalyst\Sentry\Users\UserNotFoundException $e)
        {
            $response = array(
                'message' => $this->getLocale()->t('User was not found.')
            );
        }
        catch (\Cartalyst\Sentry\Users\UserNotActivatedException $e)
        {
            $response = array(
                'message' => $this->getLocale()->t('Your account is not yet activated.')
            );
        }

        // The following is only required if throttle is enabled
        catch (\Cartalyst\Sentry\Throttling\UserSuspendedException $e)
        {
            $response = array(
                'message' => $this->getLocale()->t('Your account is suspended.')
            );
        }
        catch (\Cartalyst\Sentry\Throttling\UserBannedException $e)
        {
            $response = array(
                'message' => $this->getLocale()->t('Your account is banned.')
            );
        }

        if ($status == 200) {
            $client         = $this->getApiServer()->getClient();
            $clientEndpoint = $client->endpoint;
            $clientScopeIds = $this->getApiServer()->getResource()->getScopeIds();
            $clientScopes   = $this->getApiServer()->getResource()->getScopes();

            $scopes = array();
            if ( ! empty($clientScopeIds)) {
                foreach ($clientScopeIds as $id) {
                    $scopes[] = array(
                        'id' => $id
                    );
                }
            }

            unset($clientScopeIds);

            if ( ! is_array($clientScopes)) {
                $clientScopes = array();
            }

            // Create a new client endpoint if not exist
            if ( ! is_object($clientEndpoint)) {
                $redirectUri = $this->getApiServer()->getRequest()->getSchemeAndHttpHost();

                $clientEndpoint = OauthClientEndpoint::create(array(
                    'client_id'    => $client->id,
                    'redirect_uri' => $redirectUri
                ));
            } else {
                $redirectUri = $clientEndpoint->redirect_uri;
            }

            // Create a new authorization code
            $authCode = $this->getApiServer()->newAuthorizeRequest('user', $response->id, array(
                'client_id'    => $client->id,
                'redirect_uri' => $redirectUri,
                'scopes'       => $scopes
            ));

            // Authorize the client to a user
            if ( ! empty($authCode)) {
                $params = array(
                    'grant_type'    => 'authorization_code',
                    'client_id'     => $client->id,
                    'client_secret' => $client->secret,
                    'redirect_uri'  => $redirectUri,
                    'code'          => $authCode,
                    'scope'         => implode(',', $clientScopes),
                    'state'         => time()
                );

                $authorizationResponse = $this->getApiServer()->performAccessTokenFlow(false, $params);

                if (array_key_exists('status', $authorizationResponse)) {
                    $status  = $authorizationResponse['status'];
                    $headers = $authorizationResponse['headers'];

                    unset($authorizationResponse['status']);
                    unset($authorizationResponse['headers']);

                    return $this->getApiServer()->resourceJson($authorizationResponse, $status, $headers);
                }

                Cookie::queue('ebriat', $authorizationResponse['access_token'], ($authorizationResponse['expires_in'] / 60));
                Cookie::queue('ebrirt', $authorizationResponse['refresh_token'], (Config::get('sule/api::oauth2.grant_types.refresh_token.refresh_token_ttl') / 60));

                // Fix user quota
                $quotaUsed = $this->getUserMeta('quota_used', $response);
                // if ((int) $quotaUsed < 0) {
                //     $this->getFs()->fixUserQuotaUsed($response->getId());
                // }
                unset($quotaUsed);

                // Merge user data with the new authorization data 
                $authorizationResponse['user'] = new UserTemplate($response, array(
                    'available_mime_types' => Config::get('ebri::mime_types')
                ));
                $response = $authorizationResponse;

                unset($authorizationResponse);
            } else {
                $response = array(
                    'message' => $this->getLocale()->t('There was a problem while logging you in, please try again or contact customer support.')
                );

                $status = 500;
            }

            unset($scopes);
            unset($clientScopes);
            unset($client);
        } else {
            $user = $this->getUser();

            if ( ! is_null($user)) {
                $client = $this->getApiServer()->getClient();

                if ( ! is_null($client)) {
                    $session = new FluentSession();
                    $session->deleteSession($client->id, 'user', $user->getId());
                    unset($session);

                    $this->getSentry()->logout();

                    Cookie::queue('ebriat', '', -1);
                    Cookie::queue('ebrirt', '', -1);
                }

                unset($client);
            }

            unset($user);
        }

        return $this->getApiServer()->resourceJson($response, $status);
    }

    /**
     * Handle fetch a user.
     *
     * @param  integer $userUniqueId
     * @return Response
     */
    public function get($userUniqueId)
    {
        $sentry = $this->getSentry();

        try {
            $currentUser = $sentry->getUser();
        } catch (\Cartalyst\Sentry\Users\UserNotFoundException $e) {
            unset($sentry);

            return $this->getApiServer()->resourceJson(array(
                'message' => $this->getLocale()->t('Permission denied.')
            ), 403);
        }

        if ( ! empty($userUniqueId)) {
            if ( ! $currentUser->hasAccess('user.view')) {
                unset($sentry);

                return $this->getApiServer()->resourceJson(array(
                    'message' => $this->getLocale()->t('Method Not Allowed.')
                ), 405);
            }

            $userMeta = new UserMeta();

            $currentUserId = $userMeta->isUniqueIdExist($userUniqueId);

            unset($userMeta);

            if ($currentUserId === false) {
                unset($sentry);

                return $this->getApiServer()->resourceJson(array(
                    'message' => $this->getLocale()->t('Could not found requested user data.')
                ), 404);
            }

            try {
                $user = $sentry->findUserById($currentUserId);
            } catch (\Cartalyst\Sentry\Users\UserNotFoundException $e) {
                unset($sentry);

                return $this->getApiServer()->resourceJson(array(
                    'message' => $this->getLocale()->t('Could not found requested user data.')
                ), 404);
            }

            unset($sentry);

            // Fix user quota
            // $quotaUsed = $this->getUserMeta('quota_used', $user);
            if ((int) $quotaUsed < 0) {
                $this->getFs()->fixUserQuotaUsed($user->getId());
            }
            unset($quotaUsed);

            return $this->getApiServer()->resourceJson(new UserTemplate($user, array(
                'available_mime_types' => Config::get('ebri::mime_types')
            )));
        }

        unset($sentry);

        // Fix user quota
        $quotaUsed = $this->getUserMeta('quota_used', $currentUser);
        // if ((int) $quotaUsed < 0) {
        //     $this->getFs()->fixUserQuotaUsed($currentUser->getId());
        // }
        unset($quotaUsed);

        return $this->getApiServer()->resourceJson(new UserTemplate($currentUser, array(
            'available_mime_types' => Config::get('ebri::mime_types')
        )));
    }

    /**
     * Return the user input.
     *
     * @return array
     */
    private function getUserInput()
    {
        $input = $this->getApiServer()->getRequest()->all();
        $purifier_config = Config::get('purifier.config');
        if ( is_array($input)) {
            if (count($input) > 0) {
                foreach($input as $key => $value) {
                    if (strpos($key, '/') !== false) {
                        unset($input[$key]);
                    } else {
                        if (is_array($value)) {
                            if ( ! empty($value)) {
                                $input[$key] = Purifier::clean($value);
                            }
                        } else {
                            $input[$key] = Purifier::clean($value);
                        }
                    }
                }
            }
        }

        $input['username'] = (isset($input['username'])) ? $input['username'] : '';
       
        return $input;
    }

    /**
     * Create a user unique id.
     *
     * @param  int $userId
     * @return void
     */
    private function createUniqueId($userId)
    {
        $userMeta = new UserMeta();
        $uniqueId = Str::randomNumeric();

        if ($userMeta->isUniqueIdExist($uniqueId) === false) {
            UserMeta::create(array(
                'user_id' => $userId,
                'key'     => 'unique_id',
                'value'   => $uniqueId
            ));
        } else {
            unset($userMeta);

            $this->createUniqueId($userId);
        }

        unset($userMeta);
    }

    /**
     * Return a user meta data.
     *
     * @param  string $key
     * @param  User|null $user
     * @return mixed
     */
    public function getUserMeta($key, $user = null)
    {
        if (is_object($user)) {
            $this->userMetas = null;
        }

        if ( ! is_object($this->userMetas)) {
            if ( ! is_object($user)) {
                $user = $this->getUser();
            }

            if (is_object($user)) {
                $metas = $user->hasMany('Andriynto\Ebri\Models\UserMeta')->getResults();

                if ( ! $metas->isEmpty()) {
                    $metas = $metas->toArray();

                    foreach ($metas as $item) {
                        $this->userMetas[$item['key']] = $item['value'];
                    }

                    unset($metas);
                }

                unset($metas);
            }

            unset($user);
        }

        if (isset($this->userMetas[$key])) {
            return $this->userMetas[$key];
        }

        return '';
    }

}