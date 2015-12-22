<?php
Route::get('savings', array(
    'before' => array(
        //'ebri.permission:setting.view'
    ), function() {
        $savings = new Andriynto\Ebri\Controllers\Savings();
        return $savings->index();
    }
));

Route::get('savings/products', array(
    'before' => array(
        //'ebri.permission:setting.view'
    ), function() {
        $savings = new Andriynto\Ebri\Controllers\Savings();
        return $savings->products();
    }
));

Route::post('savings/products', array(
    'before' => array(
        //'ebri.permission:setting.view'
    ), function() {
        $savings = new Andriynto\Ebri\Controllers\Savings();
        return $savings->products();
    }
));


Route::get('savings/branch', array(
    'before' => array(
        //'ebri.permission:setting.view'
    ), function() {
        $savings = new Andriynto\Ebri\Controllers\Savings();
        return $savings->branch();
    }
));

Route::post('savings/branch', array(
    'before' => array(
        //'ebri.permission:setting.view'
    ), function() {
        $savings = new Andriynto\Ebri\Controllers\Savings();
        return $savings->branch();
    }
));

Route::get('savings/branchoffice', array(
    'before' => array(
        //'ebri.permission:setting.view'
    ), function() {
        $savings = new Andriynto\Ebri\Controllers\Savings();
        return $savings->branchOffice();
    }
));

Route::post('savings/branchoffice', array(
    'before' => array(
        //'ebri.permission:setting.view'
    ), function() {
        $savings = new Andriynto\Ebri\Controllers\Savings();
        return $savings->branchOffice();
    }
));

Route::get('savings/export', array(
    'before' => array(
        //'ebri.permission:setting.view'
    ), function() {
        $savings = new Andriynto\Ebri\Controllers\Savings();
        return $savings->export();
    }
));