<?php namespace Andriynto\Ebri\Supports;

use Cartalyst\Sentry\Sentry;

Class Access
{
	/**
	* The Sentry.
	*
	* @var Sentry
	*/
	protected $sentry;

	/**
	* The User.
	*
	* @var User
	*/
	protected $user;

	/**
	* Create a new instance.
	*
	* @param Sentry $sentry
	* @param void
	*/
	public function __construct(Sentry $sentry)
	{
		$this->sentry = $sentry;
	}

	/**
	* Check Permission
	*
	* @param string $permission
	* @return bollean
	*/
	public function has($permission)
	{
		$user = $this->getUser();

		$isHaving = false;
		if( ! is_null($user))
		{
			$isHaving = $user->hasAccess($permission);
		}

		unset($user);

		return $isHaving;
	}

	/**
	* get Current logged in user
	*
	* @return bollean
	*/
	public function getUser()
	{
		if(is_null($this->user))
		{
			try {
				$this->user = $this->sentry->getUser();
			}catch(\Cartalyst\Sentry\Users\UserNotFoundException $e)
			{
				$this->user = null;
			}
		}

		return $this->user;
	}
}