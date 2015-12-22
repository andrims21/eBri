<?php namespace Andriynto\Ebri\Controllers;

use Andriynto\Ebri\Controllers\Base;

use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\DB;

use Cartalyst\Sentry\Sentry;

use Mews\Purifier\Purifier;

use Sule\Api\OAuth2\Models\OauthClient;
use Sule\Api\OAuth2\Models\OauthClientEndpoint;
use Sule\Api\OAuth2\Repositories\FluentSession;

use Andriynto\Ebri\Supports\Template as TemplateSupport;
use Andriynto\Ebri\Models\Target as TargetProvider;
use Andriynto\Ebri\Models\Performances\Savings as SavingProvider;

class Savings extends Base
{
    /**
     * The Performance.
     *
     * @var performance
     */
    protected $performance;

    /**
     * The Template.
     *
     * @var Template
     */
    protected $template;

    /**
     * The the Template.
     *
     * @var Template
     */
    public function getPerformance()
    {
        if(is_null($this->performance)) {
            $this->performance = App::make('ebri.performance');
        }

        return $this->performance;
    }

    /**
     * The the Template.
     *
     * @var Template
     */
    public function getTemplate()
    {
        if (is_null($this->template)) {
            $this->template = App::make('ebri.template');
        }

        return $this->template;
    }

     /**
     * Show the overview Savings Ritel.
     *
     * @return View
    */
     public function index()
     {
        return View::make('ebri::savings.index')
            ->With('option_products', $this->getTemplate()->getAllProducts())
            ->With('option_branch', $this->getTemplate()->getAllBranch())
            ->With('option_branchoffice', $this->getTemplate()->getAllOptGroup())
            ->With('option_date_report', $this->getPerformance()->getAllDate());
     }

    /**
     * Show the products.
     *
     * @return View
    */
    public function products()
    {
        $dates   = $this->getPerformance()->getDateSaving(Input::get('dates'));
        $target  = $this->getPerformance()->getTargetRitelByProduct();
        $segmentase = Input::get('code');
        $branches= $this->getPerformance()->getBranchSaving(Input::get('branches'));
        $savings = $this->getPerformance()->getProductSavings($segmentase, $branches, $dates);

        return View::make('ebri::savings.products')
            ->With('option_products', $this->getTemplate()->getAllProducts())
            ->With('option_branch', $this->getTemplate()->getAllBranch())
            ->With('option_date_report', $this->getPerformance()->getAllDate())
            ->With('date_header', $this->getTemplate()->setHeaderTable($dates) )
            ->With('title_table', $this->getTemplate()->setTitleHeaderTableSavings($dates))
            ->With('date_report', $dates )
            ->With('target', $target)
            ->With('savings', $this->getTemplate()->extraction_product_date($savings, $dates) );
    }

    /**
     * Show the Branch.
     *
     * @return View
    */
    public function branch()
    {
        $product = $this->getPerformance()->getRequestProduct(Input::get('products'));
        $branches= $this->getPerformance()->getBranchSaving(Input::get('branches'));
        $target  = $this->getPerformance()->getTargetRitel($product, $branches, $branchesOffice = null);
        $dates   = $this->getPerformance()->getDateSaving(Input::get('dates'));
        $savings = $this->getPerformance()->findSavingsByDate($branches, $branchOffices = null, $dates, $product);

        return View::make('ebri::savings.branch')
             ->With('product_detail', $this->getTemplate()->getProductById($product))
             ->With('option_products', $this->getTemplate()->getAllProducts())
             ->With('option_branch', $this->getTemplate()->getAllBranch())
             ->With('option_branchoffice', $this->getTemplate()->getAllOptGroup())
             ->With('option_date_report', $this->getPerformance()->getAllDate())
             ->With('date_header', $this->getTemplate()->setHeaderTable($dates) )
             ->With('title_table', $this->getTemplate()->setTitleHeaderTableSavings($dates))
             ->With('date_report', $dates )
             ->With('target', $this->getTemplate()->extract_target_by_branch($target['branch']))
             ->With('target_total', $target['region'])
             ->With('savings', $this->getTemplate()->extraction_of_branch_by_date($savings['branch'], $dates) )
             ->With('grand_total', $this->getTemplate()->extraction_product_date($savings['region'], $dates));
    }

    /**
     * Show the BranchOffices.
     *
     * @return View
    */
    public function branchOffices()
    {
        $product = $this->getPerformance()->getRequestProduct(Input::get('products'));
        $branches= $this->getPerformance()->getBranchSaving(Input::get('branches'));
        $branchOffices = Input::get('branchesOffice');
        $target  = $this->getPerformance()->getTargetRitel($product, $branches, $branchOffices);
        $dates   = $this->getPerformance()->getDateSaving(Input::get('dates'));
        $savings = $this->getPerformance()->findSavingsByDate($branches, $branchOffices, $dates, $product);
        $option_branchoffice = $this->getTemplate()->getAllOptGroup();

 
        return View::make('ebri::savings.branch_office')
            ->With('product_detail', $this->getTemplate()->getProductById($product))
            ->With('option_products', $this->getTemplate()->getAllProducts())
            ->With('option_branch', $this->getTemplate()->getAllBranch())
            ->With('option_branchoffice', $this->getTemplate()->getAllOptGroup())
            ->With('option_date_report', $this->getPerformance()->getAllDate())
            ->With('date_header', $this->getTemplate()->setHeaderTable($dates) )
            ->With('title_table', $this->getTemplate()->setTitleHeaderTableSavings($dates))
            ->With('date_report', $dates )
            ->With('target_branch_offices', $this->getTemplate()->extract_target_by_branch_office($target['branchOffice']))
            ->With('target_branches', $this->getTemplate()->extract_target_by_branch($target['branch']))
            ->With('target_grand_total', $target['region'])
            ->With('branches', $this->getTemplate()->Branch())
            ->With('branchOffices', $this->getTemplate()->branchOffice())
            ->With('savings',  $this->getTemplate()->extraction_of_branch_office_by_branch_and_date($savings['branch'], $savings['branchOffice'], $dates) )
            ->With('sub_total', $this->getTemplate()->extraction_of_branch_by_date($savings['branch'], $dates))
            ->With('grand_total', $this->getTemplate()->extraction_product_date($savings['region'], $dates));

    }

}