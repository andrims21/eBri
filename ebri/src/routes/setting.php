<?php

// Get Branch list
Route::get('api/v1/branches', array(
    'before' => array(
        'api.ua.required', 
        'api.limit', 
        'api.content.md5', 
        'api.oauth:read', 
        'ebri.loggedin',
        'ebri.permission:user.view'
    ), function() {
        return App::make('ebri.api')->v1()->getSetting()->allBranch();
    }
));