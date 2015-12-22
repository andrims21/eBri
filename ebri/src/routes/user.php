<?php

Route::group(array('before' => array(
    'api.ua.required', 
    'api.limit', 
    'api.content.md5', 
    'api.oauth'
), 'prefix' => 'api/v1'), function() {

    // Loging in a user
    Route::post('authenticate', function() {
        return App::make('ebri.api')->v1()->getUser()->login();
    });
});


Route::group(array('before' => array(
    'api.ua.required', 
    'api.limit', 
    'api.content.md5', 
    'api.oauth'
), 'prefix' => 'api/v1'), function() {
    // Activate a user
    Route::post('activate/{code}', function($code) {
        return App::make('ebri.api')->v1()->getUser()->activate($code);
    })->where('code', '[a-zA-z0-9]+');
});

// Create a user
Route::post('api/v1/users', array(
    'before' => array(
        'api.ua.required', 
        'api.content.json', 
        'api.limit', 
        'api.content.md5', 
        'api.oauth:write', 
        'ebri.permission:user.create'
    ), function() {
        return App::make('ebri.api')->v1()->getUser()->create();
    }
));

// Get a user
Route::get('api/v1/user', array(
    'before' => array(
        'api.ua.required', 
        'api.limit', 
        'api.oauth:read', 
        'ebri.loggedin'
    ), function() {
        return App::make('ebri.api')->v1()->getUser()->get('');
    }
));