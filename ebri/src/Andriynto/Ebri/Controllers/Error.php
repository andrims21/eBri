<?php namespace Andriynto\Ebri\Controllers;


use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Response;

use Andriynto\Ebri\Controllers\Base;

class Error extends Base
{

	/**
     * Show 404 error page.
     *
     * @return View
     */
    public function _404()
    {
        return Response::make(View::make('ebri::error_404'), 404);
    }

    /**
     * Show 500 error page.
     *
     * @return View
     */
    public function _500()
    {
        return Response::make(View::make('ebri::error_500'), 500);
    }

}