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
use Maatwebsite\Excel\Facades\Excel;

use Sule\Api\OAuth2\Models\OauthClient;
use Sule\Api\OAuth2\Models\OauthClientEndpoint;
use Sule\Api\OAuth2\Repositories\FluentSession;

use Andriynto\Ebri\Supports\Template as TemplateSupport;
use Andriynto\Ebri\Models\Target as TargetProvider;
use Andriynto\Ebri\Models\Performances\Savings as SavingProvider;

class Savings extends Base
{

    /**
    * Overview Savings.
    *
    * @var Template
    */
    public function index()
    {
    	return View::make('ebri::savings.index')
    			->With('option_products', $this->getTemplate()->getAllProducts())
    			->With('option_branch', $this->getTemplate()->getAllBranch())
    			->With('option_branchoffice', $this->getTemplate()->getAllOptGroup())
    			->With('option_date_report', $this->getCollection()->getAllDate());
    }

    public function products()
    {
    	/* Inisialisation date on savings database */
    	$dates   = $this->getCollection()->date(Input::get('dates'));
    	/* Get target Savings By Product */
    	$target  = $this->getCollection()->getTargetByProducts();
    	/* Inisialisation branch request */
    	$branches= $this->getCollection()->getBranch(Input::get('branches'));
    	/* Collect Request Saving Data */
    	$savings = $this->getCollection()->getProductSavings(Input::get('code'), $branches, $dates, true);

    	/* Extraction and Grouping Array Process */
    	$savings 	= $this->getTemplate()->extraction_product_by_date($savings, $dates);
    
    	/* Parsing to view all data */
    	return View::make('ebri::savings.products')
    			->With('option_products', $this->getTemplate()->getAllProducts())
    			->With('option_branch', $this->getTemplate()->getAllBranch())
    			->With('option_branchoffice', $this->getTemplate()->getAllOptGroup())
    			->With('option_date_report', $this->getCollection()->getAllDate())
    			->With('date_header', $this->getTemplate()->header($dates) )
    			->With('title_table', $this->getTemplate()->titleHeaderSavings($dates))
    			->With('date_report', $dates )
    			->With('code', Input::get('code'))
    			->With('target', $target)
    			->With('savings', $savings);
    }

    public function branch()
    {
    	/* Inisialisation date on savings database */
    	$dates   = $this->getCollection()->date(Input::get('dates'));
    	/* Get Product request, if not form request, default 1 (Giro) */
    	$products= (Input::get('products') ? Input::get('products') : 1 );
    	/* Inisialisation branch request */
    	$branches= $this->getCollection()->getBranch(Input::get('branches'));
    	/* Get target Savings By Product */
    	$target  = $this->getCollection()->getTargetSavings($products, $branches, $branchesOffice = null);
    	/* Get Savings by date */
    	$savings = $this->getCollection()->findSavingsByDate($branches, $branchOffices = null, $dates, $products, Input::get('code'));

    	/* Extraction and Grouping Array Processing */
    	$target_branches= $this->getTemplate()->extraction_target_by_branch($target['branches']);
    	$target_region	= $target['region'];
    	$savings_branches = $this->getTemplate()->extraction_of_branch_by_date($savings['branches'], $dates);
    	$savings_regional = $this->getTemplate()->extraction_of_regional_by_date($savings['region'], $dates);

    	/* Parsing to view all data processing */
    	return View::make('ebri::savings.branch')
    			->With('product_detail', $this->getTemplate()->getProductById($products))
    			->With('option_products', $this->getTemplate()->getAllProducts())
    			->With('option_branch', $this->getTemplate()->getAllBranch())
    			->With('option_branchoffice', $this->getTemplate()->getAllOptGroup())
    			->With('option_date_report', $this->getCollection()->getAllDate())
    			->With('date_header', $this->getTemplate()->header($dates) )
    			->With('title_table', $this->getTemplate()->titleHeaderSavings($dates))
    			->With('date_report', $dates )
    			->With('code', Input::get('code'))
    			->With('savings', $savings_branches)
    			->With('grand_total', $savings_regional)
    			->With('target', $target_branches)
    			->With('target_total', $target_region);
    }

    public function branchOffice()
    {
        /* Inisialisation date on savings database */
        $dates   = $this->getCollection()->date(Input::get('dates'));
    	/* Get Product request, if not form request, default 1 (Giro) */
        $products= (Input::get('products') ? Input::get('products') : 1 );
        /* Inisialisation branch request */
        $branches= $this->getCollection()->getBranch(Input::get('branches'));
        /* Inisialisation branch Office request */
        $branchesOffice = Input::get('branchesOffice');
        /* Get target Savings By Product */
        $target  = $this->getCollection()->getTargetSavings($products, $branches, $branchesOffice);
        /* Get Savings by date */
        $savings = $this->getCollection()->findSavingsByDate($branches, $branchesOffice, $dates, $products, Input::get('code'));
        
        /* Extraction and Grouping Target Array Processing */
        $target_branchOffice    = $this->getTemplate()->extraction_target_by_branchOffice($target['branchOffice']);
        $target_branches        = $this->getTemplate()->extraction_target_by_branch($target['branches']);
        $target_region          = $target['region'];

        /* Extraction and Grouping Savings Array Processing */
        $savings_branchOffice   = $this->getTemplate()->extraction_of_branchOffice_by_date($savings['branches'], $savings['branchOffice'], $dates);
        $savings_branches       = $this->getTemplate()->extraction_of_branch_by_date($savings['branches'], $dates);
        $savings_regional       = $this->getTemplate()->extraction_of_regional_by_date($savings['region'], $dates);

        /* set Parameter on session (Preapre to print data) */
        Session::put('branchoffice_product_session_export', $products);
        Session::put('branchoffice_date_session_export', $dates);
        Session::put('branchoffice_session_export', $branchesOffice);

        return View::make('ebri::savings.branchOffice')
                ->With('product_detail', $this->getTemplate()->getProductById($products))
                ->With('option_products', $this->getTemplate()->getAllProducts())
                ->With('option_branch', $this->getTemplate()->getAllBranch())
                ->With('option_branchoffice', $this->getTemplate()->getAllOptGroup())
                ->With('option_date_report', $this->getCollection()->getAllDate())
                ->With('date_header', $this->getTemplate()->header($dates) )
                ->With('title_table', $this->getTemplate()->titleHeaderSavings($dates))
                ->With('date_report', $dates )
                ->With('code', Input::get('code'))
                ->With('branches', $this->getTemplate()->Branch())
                ->With('branchOffices', $this->getTemplate()->branchOffice())
                ->With('savings', $savings_branchOffice)
                ->With('sub_total', $savings_branches)
                ->With('grand_total', $savings_regional)
                ->With('target_branch_offices', $target_branchOffice)
                ->With('target_subtotal', $target_branches)
                ->With('target_grand_total', $target_region);
    }

    public function export1()
    {
        //$date_header      = $this->getTemplate()->header(Session::get('branchoffice_date_session_export'));
        //print_r(count($date_header) - 1); die;
        Excel::create('Savings '.ucfirst(Input::get('code')), function($excel) {
            $code             = Input::get('code');

            /* Get Product request, if not form request, default 1 (Giro) */
            $products= Session::get('branchoffice_product_session_export');
            /* Inisialisation date on savings database */
            $dates   = Session::get('branchoffice_date_session_export');
            /* Inisialisation branch request */
            $branches= $this->getCollection()->getBranch(Input::get('branches'));
             /* Inisialisation branch Office request */
            $branchesOffice = Session::get('branchoffice_session_export');
            /* Get Savings by date */
            $savings = $this->getCollection()->findSavingsByDate($branches, $branchesOffice, $dates, $products, Input::get('code'));

            /* Extraction and Grouping Savings Array Processing */
            $savings_branchOffice   = $this->getTemplate()->extraction_of_branchOffice_by_date($savings['branches'], $savings['branchOffice'], $dates);
            $savings_branches       = $this->getTemplate()->extraction_of_branch_by_date($savings['branches'], $dates);
            $savings_regional       = $this->getTemplate()->extraction_of_regional_by_date($savings['region'], $dates);

            $branches = $this->getTemplate()->Branch();
            $branchesOffice = $this->getTemplate()->branchOffice();
            $date_header      = $this->getTemplate()->header(Session::get('branchoffice_date_session_export'));

            // Set the title
            $excel->setTitle('Laporan Simpanan Ritel Per Unit Kerja');

            // Chain the setters
            $excel->setCreator('eBri Author : Andriyanto')
                  ->setCompany('Kantor Wilayah BRI Medan');

            // Call them separately
            $excel->setDescription('A demonstration to change the file properties');

            //Parsing Data
            $excel->sheet('Simpanan Per Unit Kerja', function($sheet) use ($dates, $date_header, $branches, $branchesOffice, $savings_branchOffice, $savings_branches)
            {
                $data = array('Kantor Cabang', 'Unit Kerja');
                $datsss = array('31 Des 2014', '31 Okt 2015' , '06 Nov 2015', '13 Nov 2015');
                $sheet->mergeCells('C1:D1');
                $sheet->mergeCells('E1:F1');
                $sheet->mergeCells('G1:H1');
                $sheet->mergeCells('I1:J1');
                $sheet->mergeCells('K1:L1');
                $sheet->mergeCells('M1:N1');
                $sheet->mergeCells('O1:P1');
                $sheet->setStyle(array(
                    'font' => array(
                        'name'      =>  'Trebuchet',
                        'size'      =>  11,
                        'bold'      =>  true
                    )
                ));
                $sheet->setHeight(array(
                    1     =>  25,
                ));
                $sheet->setAllBorders('thin');

                $sheet->cells('A1:P1', function($cells) {
                    $cells->setBackground('#ff7f00');
                    $cells->setFontColor('#ffffff');
                    $cells->setAlignment('center');
                    $cells->setValignment('middle');
                    $cells->setBorder('solid', 'solid', 'solid', 'solid');
                });
                $i=1;
                //$end_date  = end($dates);
                $sheet->fromArray($data, null, 'A1', false, false);
                //$sheet->fromArray($dates, null, 'D1', false, false);
               
               

                
                $sheet->setStyle(array(
                                                'font' => array(
                                                    'name'      =>  'Trebuchet',
                                                    'size'      =>  9,
                                                    'bold'      =>  false
                                                )
                                            ));
                                            $sheet->cells('C2:P349', function($cells) {
                                                $cells->setAlignment('right');
                                                $cells->setValignment('middle');
                                                $cells->setBorder('solid', 'solid', 'solid', 'solid');
                                            });

                foreach($savings_branchOffice as $saving)
                 {
                     foreach($branches as $branch)
                     {
                         if(isset($saving[$branch->id]))
                         {
                             foreach($branchesOffice as $branchOffice)
                             {
                                 if(isset($saving[$branch->id][$branchOffice->id] ) )
                                 {
                                     foreach($dates as $index => $date)
                                     {
                                         if(isset($saving[$branch->id][$branchOffice->id][$date] )  and $saving[$branch->id][$branchOffice->id][$date]->branch == $branch->id  )
                                         {
                                             $sheet->row($i+=1, array(
                                                 $branch->id." --- ".$branch->name,
                                                 $branchOffice->id. " --- ".$branchOffice->description,
                                                 number_format($saving[$branch->id][$branchOffice->id][$date]->rekening, 0, ',', '.'),
                                                 number_format($saving[$branch->id][$branchOffice->id][$date]->instanding, 0, ',', '.')
                                             ));
                                         }
                                     }
                                 }
                             }
                         }
                     }
                }
                
            });
        })->export('xlsx');       
    }

    public function export()
    {
         Excel::create('Users', function($excel) {

      $excel->sheet('Users', function($sheet) {
        //$users = User::orderBy('created_at','desc')->get();
            $sheet->loadView('ebri::savings.excel');
      });
    })->download('xls');
    }
}