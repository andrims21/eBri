<?php namespace Andriynto\Ebri;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\File;

use Andriynto\Ebri\Apis\Api;
use Andriynto\Ebri\Ebri;
use Andriynto\Ebri\Models\Option;
use Andriynto\Ebri\Models\Products;
use Andriynto\Ebri\Models\Settings\Branch;
use Andriynto\Ebri\Models\Settings\BranchOffice;
use Andriynto\Ebri\Models\Performances\Target\Eloquent\Provider as TargetProvider;
use Andriynto\Ebri\Models\Performances\Savings\Eloquent\Provider as SavingsProvider;
use Andriynto\Ebri\Supports\Option  as OptionSupport;
use Andriynto\Ebri\Supports\Locale;
use Andriynto\Ebri\Supports\Access;
use Andriynto\Ebri\Supports\Template as TemplateSupport;

class EbriServiceProvider extends ServiceProvider {

	/**
	 * Indicates if loading of the provider is deferred.
	 *
	 * @var bool
	 */
	protected $defer = false;

	/**
	 * Bootstrap the application events.
	 *
	 * @return void
	 */
	public function boot()
	{
		$this->package('andriynto/ebri');

		//Register Cartalyst Sentry
		$this->app->register('Cartalyst\Sentry\SentryServiceProvider');

		//Register the HTML Purifier
		$this->app->register('Mews\Purifier\PurifierServiceProvider');

		//Register the Excel
		$this->app->register('Maatwebsite\Excel\ExcelServiceProvider');

		//Load the Filters
		include __DIR__.'/../../filters.php';

		//Load the routes
		include __DIR__.'/../../routes/general.php';
		include __DIR__.'/../../routes/user.php';
		include __DIR__.'/../../routes/setting.php';
		include __DIR__.'/../../routes/file.php';
		include __DIR__.'/../../routes/savings.php';
	}

	/**
	 * Register the service provider.
	 *
	 * @return void
	 */
	public function register()
	{
		$this->registerOption();
		$this->registerLocale();
		$this->registerAccess();
		$this->registerAPIs();
		$this->registerSavings();
		$this->registerTarget();
		$this->registerEbri();
		$this->registerTemplate();
	}

	/**
	 * Register the Option.
	 *
	 * @return void
	 */
	public function registerOption()
	{
		$this->app['ebri.option'] = $this->app->share(function($app) {
			// Prepare options
            $options = Option::all();
            if ($options->isEmpty()) {
                $options = array();
            } else {
                $options = $options->toArray();
            }

            return new OptionSupport($options);
		});
	}

	 /**
     * Register the Locale.
     *
     * @return void
     */
    public function registerLocale()
    {
        $this->app['ebri.locale'] = $this->app->share(function($app) {
            return new Locale($app['ebri.option']->locale, __DIR__.'/../../lang');
        });
    }

	/**
	 * Register the Access
	 *
	 * @return void
	 */
	public function registerAccess()
	{
		$this->app['ebri.access']	= $this->app->share(function($app) {
			return new Access($app['sentry']);
		});
	}

	/**
	 * Register the Access
	 *
	 * @return void
	 */
	public function registerAPIs()
	{
		$this->app['ebri.api'] = $this->app->share(function($app) {
			// Modifiy HTML Purifier config
			$app['config']->set('purifier::config.settings.default.AutoFormat.AutoParagraph', false);

			//create the default storage folder
			$option 		= $app['ebri.option'];
			$storageFolder	= $option->storage_folder;

			if( ! empty($storageFolder))
			{
				$option->storage_path = $path = storage_path().'/'.$storageFolder;

				if( ! File::isDirectory($path) )
				{
					File::makeDirectory($path, $app['config']['ebri::chmod_folder'], true);
				}

				unset($path);
			}

			unset($storageFolder);
			unset($option);

			return new Api($app['api'], $app['sentry'], $app['excel']);
		});
	}

	/**
	* Register Target Rka for use Target Model
	*
	* @return void
	*/	
	public function registerTarget()
	{
		$this->app['ebri.target'] = $this->app->share(function($app) {
			
			$model = "Andriynto\Ebri\Models\Performances\Target\Eloquent\Target";

			return new TargetProvider($model);
		});
	}

	/**
	* Register Savings for use Saving Controller
	*
	* @return void
	*/	
	public function registerSavings()
	{
		$this->app['ebri.savings'] = $this->app->share(function($app) {
			$branches = Branch::all();

			if($branches->isEmpty())
			{
				$branches = array();
			}else {
				$branches = $branches;
			}

			$model = "Andriynto\Ebri\Models\Performances\Savings\Eloquent\Savings";

			return new SavingsProvider($model, $branches);
		});
	}

	/**
	* Register Collection Service for collect data report
	*
	* @return void
	*/
	protected function registerEbri()
	{
		$this->app['ebri.services'] = $this->app->share(function($app)
		{
			return new Ebri(
				$app['ebri.target'],
				$app['ebri.savings']
			);
		});
	}

	/**
	* Register Template Reports eBri
	*
	* @return void
	*/
	public function registerTemplate()
	{
		$this->app['ebri.template'] = $this->app->share(function($app) {
			
			$branches = Branch::all();
			if($branches->isEmpty())
			{
				$branches = array();
			}else {
				$branches = $branches;
			}

			$branchOffice = BranchOffice::all();
			if($branchOffice->isEmpty())
			{
				$branchOffice = array();
			}else {
				$branchOffice = $branchOffice;
			}

			$products = Products::all();
			if($products->isEmpty())
			{
				$products = array();
			}else {
				$products = $products;
			}

			return new TemplateSupport($branches, $branchOffice, $products);

		});
	}

	/**
	 * Get the services provided by the provider.
	 *
	 * @return array
	 */
	public function provides()
	{
		return array('ebri', 'ebri.option', 'ebri.locale', 'ebri.access', 'ebri.api', 'ebri.permission', 'ebri.services', 'ebri.target' ,'ebri.template');
	}

}
