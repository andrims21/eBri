<?php namespace Andriynto\Ebri\Apis\V1;

use Andriynto\Api\Api as ApiServer;
use Cartalyst\Sentry\Sentry;
use Maatwebsite\Excel\Excel;

class Provider
{
	/**
	* The Api Server
	*
	* @var Api
	*/
	protected $ApiServer;

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
	* The User Controller class
	*
	* @var string
	*/
	public $userClass 		= 'Andriynto\Ebri\Apis\v1\User';

	/**
	* The Settings Controller class
	*
	* @var string
	*/
	public $settingClass 		= 'Andriynto\Ebri\Apis\v1\Setting';


	/**
	* The Group Controller class
	*
	* @var string
	*/
	public $groupClass 		= 'Andriynto\Ebri\Apis\v1\Group';

	/**
	* The File Controller class
	*
	* @var string
	*/
	public $fileClass 		= 'Andriynto\Ebri\Apis\v1\File';

	/**
	* Create a new instance
	*
	* @param ApiServer $apiServer
	* @param Sentry $sentry
	* @return void
	*/
	public function __construct (
		ApiServer $apiServer,
		Sentry 	  $sentry,
		Excel 	  $excel
	)
	{
		$this->apiServer = $apiServer;
		$this->sentry 	 = $sentry;
		$this->excel 	 = $excel;
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
	* Create a new instance
	*
	* @return User
	*/
	public function getUser ()
	{
		$class = '\\'.ltrim($this->userClass, '\\');

		return new $class($this->getApiServer(), $this->getSentry());
	}

	/**
	* Create a new instance
	*
	* @return Group
	*/
	public function getSetting()
	{
		$class = '\\'.ltrim($this->settingClass, '\\');

		return new $class($this->getApiServer(), $this->getSentry());
	}

	/**
	* Create a new instance
	*
	* @return Group
	*/
	public function getGroup ()
	{
		$class = '\\'.ltrim($this->groupClass, '\\');

		return new $class($this->getApiServer(), $this->getSentry());
	}

	/**
	* Create a new instance
	*
	* @return File
	*/
	public function getFile ()
	{
		$class = '\\'.ltrim($this->fileClass, '\\');

		return new $class($this->getApiServer(), $this->getSentry());
	}



}