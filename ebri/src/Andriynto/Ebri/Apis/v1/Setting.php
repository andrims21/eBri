<?php namespace Andriynto\Ebri\Apis\v1;

use Illuminate\Support\Facades\App;

use Andriynto\Api\Api as ApiServer;

use Cartalyst\Sentry\Sentry;

use Andriynto\Ebri\Models\Settings\Branch;

use Andriynto\Ebri\Apis\v1\Templates\Setting\Branch as BranchTemplate;

class Setting
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
     * The current User.
     *
     * @var User
     */
    protected $user;

    /**
     * Create a new instance.
     *
     * @param  ApiServer $apiServer
     * @param  Sentry $sentry
     * @return void
     */
    public function __construct(ApiServer $apiServer, Sentry $sentry)
    {
        $this->apiServer = $apiServer;
        $this->sentry    = $sentry;
    }

    /**
     * Return the Api Server.
     *
     * @return ApiServer
     */
    public function getApiServer()
    {
        return $this->apiServer;
    }

	/**
     * Return the Sentry.
     *
     * @return Sentry
     */
    public function getSentry()
    {
        return $this->sentry;
    }

    /**
     * Return the Option.
     *
     * @return Option
     */
    public function getOption()
    {
        if (is_null($this->option)) {
            $this->option = App::make('kotakin.option');
        }

        return $this->option;
    }

    /**
     * Return the Locale.
     *
     * @return Locale
     */
    public function getLocale()
    {
        if (is_null($this->locale)) {
            $this->locale = App::make('kotakin.locale');
        }

        return $this->locale;
    }

	/**
     * Handle fetch branch list.
     *
     * @return Response
     */
    public function allBranch()
    {
    	$user = $this->getUser();

        if ( ! is_object($user)) {
            return $this->getApiServer()->resourceJson(array(
                'message'     => $this->getLocale()->t('Permission denied.'),
                'description' => $this->getLocale()->t('Unable to identify current logged in user.')
            ), 403);
        }

        $branchList = Branch::all();
        
        $branches 	= array();

        if ( ! $branchList->isEmpty())
        {
        	foreach($branchList as $branch)
        	{
        		$branches[] = new BranchTemplate($branch);
        	}
        }

        unset($branchList);

        return $this->getApiServer()->collectionJson($branches);
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
}