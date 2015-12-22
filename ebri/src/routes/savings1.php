<?php
//------------------------------- SIMPANAN RITEL----------------------------
// Route::get('Savings', array(
//     'before' => array(
//         'ebri.permission:setting.view'
//     ), function() {
//         $setting = new Andriynto\Ebri\Controllers\Savings();
//         return $setting->index();
//     }
// ));

Route::get('savings/retail', array(
    'before' => array(
        //'ebri.permission:setting.view'
    ), function() {
        $savings = new Andriynto\Ebri\Controllers\Savings();
        return $savings->index();
    }
));

Route::get('savings/retail/products', array(
    'before' => array(
        //'ebri.permission:setting.view'
    ), function() {
        $savings = new Andriynto\Ebri\Controllers\Savings();
        return $savings->products();
    }
));

Route::post('savings/retail/products', array(
    'before' => array(
        //'ebri.permission:setting.view'
    ), function() {
        $savings = new Andriynto\Ebri\Controllers\Savings();
        return $savings->products();
    }
));

Route::get('savings/retail/branch', array(
    'before' => array(
        //'ebri.permission:setting.view'
    ), function() {
        $savings = new Andriynto\Ebri\Controllers\Savings();
        return $savings->branch();
    }
));

Route::post('savings/retail/branch', array(
    'before' => array(
        //'ebri.permission:setting.view'
    ), function() {
        $savings = new Andriynto\Ebri\Controllers\Savings();
        return $savings->branch();
    }
));

Route::get('savings/retail/branchOffice', array(
    'before' => array(
        //'ebri.permission:setting.view'
    ), function() {
        $savings = new Andriynto\Ebri\Controllers\Savings();
        return $savings->branchOffices();
    }
));

Route::post('savings/retail/branchOffice', array(
    'before' => array(
        //'ebri.permission:setting.view'
    ), function() {
        $savings = new Andriynto\Ebri\Controllers\Savings();
        return $savings->branchOffices();
    }
));

Route::get('savings/retail/branchOffice/{product}/{branch}', array(
    'before' => array(
       
    ), function($product, $branch) {
        $savings = new Andriynto\Ebri\Controllers\Savings();
        return $savings->branchOffice($product, $branch);
    }
))->where('product', '\d+')->where('branch', '\d+');
//------------------------END SIMPANAN RITEL----------------------------


/**
* Show the Mikro Overview.
*/
Route::get('savings/mikro', array(
    'before' => array(
        //'ebri.permission:setting.view'
    ), function() {
        $savings = new Andriynto\Ebri\Controllers\Savings();
        return $savings->index();
    }
));

/**
* Show the Mikro Per Products.
*/
Route::get('savings/mikro/products', array(
    'before' => array(
        //'ebri.permission:setting.view'
    ), function() {
        $savings = new Andriynto\Ebri\Controllers\Savings();
        return $savings->products();
    }
));
