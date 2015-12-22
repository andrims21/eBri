<?php

Route::pattern('slug', '[A-z0-9-]+');
Route::pattern('product', '[\d+]+');
Route::pattern('branch', '[\d+]+');

Route::get('ebriat', array(
	'before' => 'csrf',
	function(){
	$home	= new Andriynto\Ebri\Controllers\Home();
	return $home->accessToken();
	}
));

Route::get('', function(){
	$home	= new Andriynto\Ebri\Controllers\Home();
	return $home->index();
});

Route::get('login', function(){
	$account = new Andriynto\Ebri\Controllers\Account();
	return $account->index();
});

//After Login
Route::get('dashboard', function(){
	$app = new Andriynto\Ebri\Controllers\App();
	return $app->index();
});


//Setting
Route::get('settings', function(){

});

Route::get('settings/branch', array(
    'before' => array(
        'ebri.permission:setting.view'
    ), function() {
        $setting = new Andriynto\Ebri\Controllers\Setting();
        return $setting->index();
    }
));

Route::get('', array(
    'before' => array(
        'ebri.permission:setting.view'
    ), function() {
        $setting = new Andriynto\Ebri\Controllers\Setting();
        return $setting->index();
    }
));

Route::get('settings/upload', array(
    'before' => array(
        'ebri.permission:setting.view'
    ), function() {
        $setting = new Andriynto\Ebri\Controllers\Setting();
        return $setting->uploaded();
    }
));

Route::get('settings/upload/', array(
    'before' => array(
        'ebri.permission:setting.view'
    ), function() {
        $setting = new Andriynto\Ebri\Controllers\Setting();
        return $setting->uploaded();
    }
));

Route::get('settings/upload/{slug}/', array(
    'before' => array(
        'ebri.permission:setting.view'
    ), function() {
        $setting = new Andriynto\Ebri\Controllers\Setting();
        return $setting->rka_uploaded();
    }
));
