<?php namespace Andriynto\Ebri\Controllers;

use Andriynto\Ebri\Controllers\Base;

use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\View;
class Home extends Base
{
	public function index()
	{
		return View::make('ebri::home');
	}

	public function accessToken()
	{
		return Response::make('', 200, array(
			'X-Content-MD5' => $this->getAccessToken().'.'.$this->getClientSecret()
		));
	}
}