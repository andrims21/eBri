<?php

// Upload a file
Route::post('api/v1/ops/file/{path}', array(
    'before' => array(
        'api.ua.required', 
        'api.content.form', 
        'api.limit', 
        'api.oauth:write', 
        'ebri.loggedin', 
        'ebri.permission:file.create'
    ), function($path) {
        return App::make('ebri.api')->v1()->getFile()->upload('post', $path);
    }
))->where('path', '.*');