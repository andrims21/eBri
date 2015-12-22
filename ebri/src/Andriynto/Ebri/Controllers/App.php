<?php
namespace Andriynto\Ebri\Controllers;

use Andriynto\Ebri\Controllers\Base;

use Illuminate\Support\Facades\View;

Class App extends Base
{
	/*
	* Show the app page
	*
	* @return view
	*/
	public function index()
	{
		return View::make("ebri::app");
	}

	public function accessToken()
	{
		return Response::make('', 200, array(
			'X-Content-MD5' => $this->getAccessToken().'.'.$this->getClientSecret()
		));
	}
}