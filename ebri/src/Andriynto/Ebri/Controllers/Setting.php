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

use Andriynto\Ebri\Models\Target;
use Andriynto\Ebri\Models\Products;
use Andriynto\Ebri\Models\Settings\BranchOffice;

use Andriynto\Ebri\Supports\Template as TemplateSupport;

class Setting extends Base
{

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
    public function getTemplate()
    {
        if (is_null($this->template)) {
            $this->template = App::make('ebri.template');
        }

        return $this->template;
    }

	/**
     * Show the setting page.
     *
     * @return View
    */
	public function index()
	{
		return View::make('ebri::settings');
	}

	/**
     * Show the setting upload page.
     *
     * @return View
    */
	public function uploaded()
	{
		return View::make('ebri::settings.upload');
	}

	/**
     * Show the setting upload RKA Ritel page.
     *
     * @return View
    */
	public function rka_uploaded()
	{

		$target_rka 	  = new Target();
		$target_rka_final = $target_rka->getTargetRitel();

		return View::make('ebri::settings.upload_rka_ritel')
				->With('products', $target_rka->ProductOnTarget())
				->With('title_table', $this->getTemplate()->setTitleHeaderTableSavings($target_rka->ProductOnTarget()))
				->with('target', $this->getTemplate()->extract_branch_office_product($target_rka_final))
				->with('branches', BranchOffice::where('category', '=', 1)->get()->toArray())
				->with('offices', $target_rka->BranchOfficeOnTarget() );
	}

	
}