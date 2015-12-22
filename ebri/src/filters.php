<?php

/*
|--------------------------------------------------------------------------
| Application & Route Filters
|--------------------------------------------------------------------------
|
| Below you will find the "before" and "after" events for the application
| which may be used to do any work before or after a request into your
| application. Here you may also register your custom route filters.
|
*/

App::before(function($request) {
    try {
        $user = DB::table('users')->first();
        unset($user);
    } catch (\PDOException $e) {
        if ( ! in_array($request->path(), array('install', 'install/db', 'install/api', 'install/user', 'install/complete'))) {
            return Redirect::to('/install', 302);
        }
    }
});

App::after(function($request, $response) {
    if (get_class($response) != 'Symfony\Component\HttpFoundation\BinaryFileResponse') {
        $response->header('Cache-Control', 'no-cache, must-revalidate');
        $response->header('P3P', 'CP="IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT"');
    }
});

App::missing(function($exception) {
    Log::error('URL : '.URL::current());

    $error = new Andriynto\Ebri\Controllers\Error();
    return $error->_404();
});


/*
|--------------------------------------------------------------------------
| Auth Filters
|--------------------------------------------------------------------------
|
| The following filters are used to verify user logged in.
|
*/

Route::filter('ebri.loggedin', function() {
    $api = App::make('ebri.api');

    if ( ! $api->logsUserIn()) {
        return $api->getApiServer()->resourceJson(array(
            'message' => 'User logged out or not activated.'
        ), 405);
    }

    unset($api);
});

/*
|--------------------------------------------------------------------------
| Permission Filters
|--------------------------------------------------------------------------
|
| The following filters are used to verify user permission.
|
*/

Route::filter('ebri.permission', function() {
    $argList = array();

    if (func_num_args() > 0) {
        $argList = func_get_args();

        unset($argList[0]);
        unset($argList[1]);
    }

    $api = App::make('ebri.api');

    if ( ! $api->checkPermission($argList)) {
        return $api->getApiServer()->resourceJson(array(
            'message' => 'Permission denied.'
        ), 405);
    }

    unset($api);
});
