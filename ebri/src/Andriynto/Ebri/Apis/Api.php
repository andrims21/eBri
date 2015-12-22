<?php namespace Andriynto\Ebri\Apis;

use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Blade;

use Andriynto\Api\Api as ApiServer;
use Cartalyst\Sentry\Sentry;
use Maatwebsite\Excel\Excel;

use Andriynto\Ebri\Apis\v1\Provider as v1Provider;

class Api
{
	/**
	* The Api Server
	*
	* @var User
	*/
	protected $apiServer;

	/**
	* The Sentry
	*
	* @var Sentry
	*/
	protected $sentry;

	/**
	* The Excel
	*
	* @var Excel
	*/
	protected $excel;

	/**
	* The Option
	*
	* @var Option
	*/
	protected $option;

	/**
	* The Locale
	*
	* @var Locale
	*/
	protected $locale;

	/**
	* Create a new instance
	*
	* @param ApiServer $apiServer
	* @param Sentry $sentry
	* @return void
	*/
	public function __construct(ApiServer $apiServer, Sentry $sentry, Excel $excel)
	{
		$this->apiServer = $apiServer;
		$this->sentry 	 = $sentry;
		$this->excel 	 = $excel;

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
                'Option::getAttribute("$1")', 
                'Option::getAttribute("$1")'
            ), $view);
        });

        $this->getLocale()->t('ebri');	
	}

	/**
	* Return the version
	*
	* @return void
	*/
	public function v1()
	{
		return new v1Provider(
			$this->getApiServer(),
			$this->getSentry(),
			$this->getExcel()
		);
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
	* Return the Excel
	*
	* @return Excel
	*/
	public function getExcel()
	{
		return $this->excel;
	}

	/**
	* Return the Option
	*
	* @return Option
	*/
	public function getOption()
	{
		if(is_null($this->option))
		{
			$this->option = App::make('ebri.option');
		}

		return $this->option;
	}

	/**
	* Return the Locale
	*
	* @return Locale
	*/
	public function getLocale()
	{
		if(is_null($this->locale))
		{
			$this->locale = App::make('ebri.locale');
		}

		return $this->locale;
	}

	/**
     * Check current user permission.
     *
     * @param  array $permission
     * @return boolean
     */
    public function checkPermission(Array $permission = array())
    {
        $hasAccess = false;

        if ( ! empty($permission)) {
            try {
                $user = $this->getSentry()->getUser();

                $option = $this->getOption();
                
                foreach ($permission as $item) {
                    if (is_object($user)) {
                        if ($user->hasAccess($item)) {
                            $hasAccess = true;
                        } else {
                            $hasAccess = false;
                            break;
                        }
                    } else {
                        if ($item == 'user.create' and $option->allow_user_registration == 'true') {
                            $hasAccess = true;
                        } else {
                            $hasAccess = false;
                            break;
                        }
                    }
                }

                unset($option);

                unset($user);
            } catch (\Cartalyst\Sentry\Users\UserNotFoundException $e) {}
        }

        return $hasAccess;
    }

    /**
     * Logs current user in identified by current access token.
     *
     * @return boolean
     */
    public function logsUserIn()
    {
        $userId    = $this->getApiServer()->getResource()->getOwnerId();
        $ownerType = $this->getApiServer()->getResource()->getOwnerType();

        if ( ! empty($userId) and $ownerType == 'user') {
            try {
                $user = $this->getSentry()->findUserById($userId);
                $this->getSentry()->login($user, false);

                // Set current user locale if defined
                $locale = $user->hasMany('Andriynto\Ebri\Models\UserMeta')->where('key', '=', 'locale')->first();
                if (is_object($locale)) {
                    $this->getLocale()->setLocale($locale->value);
                }

                unset($locale);
                unset($user);

                return true;
            } catch (\Cartalyst\Sentry\Users\UserNotFoundException $e) {
            } catch (\Cartalyst\Sentry\Users\UserNotActivatedException $e) {}
        }

        return false;
    }

}