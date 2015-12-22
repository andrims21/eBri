<?php namespace Andriynto\Ebri\Controllers;

use Andriynto\Ebri\Controllers\Base;

use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\View;

class Account extends Base
{
	public function index()
	{
		Cookie::queue('ebriat', '', -1);
		Cookie::queue('ebrirt', '', -1);

		return View::make('ebri::account');
	}
}