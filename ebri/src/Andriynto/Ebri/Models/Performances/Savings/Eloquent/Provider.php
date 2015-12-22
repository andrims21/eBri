<?php namespace Andriynto\Ebri\Models\Performances\Savings\Eloquent;

use Illuminate\Database\Eloquent\Model;
use Andriynto\Ebri\Models\Performances\Savings\ProviderInterface;
use Andriynto\Ebri\Models\Performances\Savings\SavingsInterface;
use DB;
class Provider implements ProviderInterface
{
	protected $branches;

	public function __construct($model, $branches )
    {
        $this->branches = $branches;
    }

	/**
	 * The Eloquent Savings Models.
	 *
	 * @var string
	 */
	protected $model = 'Andriynto\Ebri\Models\Performances\Savings\Eloquent\Savings';

	/**
    * get Branch for option select
    *
    * @return View
    */
	public function getBranch()
	{
		$list = [];
		foreach($this->branches as $branch)
		{
			$list[$branch->id] = $branch->id;
		}

		return $list;
	}

	/**
    * get Date register on Savings.
    *
    * @return View
    */
	public function getAllDate()
	{
		$dates 	 = [];
		$tanggal = new \Andriynto\Ebri\Libs\IndonesiaDate();
		$model   = $this->createModel();
		$result  = $model->newQuery()->select('date_report')->groupBy('date_report')->orderBy('date_report', 'desc')->get();

		foreach($result as $date )
		{
			$dates[$date->date_report] = $tanggal->tgl_indo($date->date_report);
		}

        return $dates;
	}

	/**
    * get Date 
    *
    * @param  Array $date 
    * @return View
    */
	public function getDate($date)
	{
		$month 			= getDate()['mon'];
		$current_month 	= getDate()['mon'] - 1;

		/* Inisialisation for array */
		$dates 			= ['2014-12-31'];

		$current_month  = DB::select(DB::raw(
							"SELECT date_report FROM savings_products
							 WHERE DATE_FORMAT(date_report, '%m') = '$current_month'
							 GROUP BY date_report
							 ORDER BY date_report desc
							 LIMIT 1"
						));

		if($month == 12)
		{
			$this_year	= getDate()['year'];
			$month 		= DB::select(DB::raw(
							"SELECT date_report FROM savings_products
							 WHERE DATE_FORMAT(date_report, '%m') = '$month' AND DATE_FORMAT(date_report, '%y') = '$this_year'
							 GROUP BY date_report
							 ORDER BY date_report DESC
							 LIMIT 1"
						));
		}else
		{
			$month 		= DB::select(DB::raw(
							"SELECT date_report FROM savings_products
							 WHERE DATE_FORMAT(date_report, '%m') = '$month'
							 GROUP BY date_report
							 ORDER BY date_report DESC
							 LIMIT 1"
						));
		}

		if( ! empty($current_month) )
			array_push($dates, $current_month[0]->date_report);

		if( ! empty($month) )
				array_push($dates, $this_month[0]->date_report);

		return $dates;
	}

	public function findByDate($branches, $branchesOffice, $dates, $product, $segmentase)
	{
		$model 		= $this->createModel();
		$data 		= $model->getSavings($branches, $dates, $product, $segmentase);
		
		/**
		* @event : branchOffice ( needed total branchesOffice, subtotal, grandtotal ) 
		* @param   array $branches (must be array)
		* @param   array $branchOffice (must be array)
		* @return  stdclass branchOffice
		*/
		if(is_array($branches) and is_array($branchesOffice))
		{
			return array(
				'region'		=> $this->collect_by_region($data, $branches, $branchesOffice),
				'branches'		=> $this->collect_by_branch($data, $branches),
				'branchOffice'	=> $this->collect_by_branchOffice($data, $branches, $branchesOffice, $segmentase)
			);
		}
		/**
		* @event : branch ( branch total, grandtotal ) 
		* @param   array $branches (must be array)
		* @return  stdclass branch
		*/
		elseif(is_array($branches))
		{
			return array(
				'region'		=> $this->collect_by_region($data, $branches, $branchesOffice),
				'branches' 		=> $this->collect_by_branch($data, $branches),
				'branchOffice' 	=> $this->collect_by_branchOffice($data, $branches, $branchesOffice, $segmentase)
			);
		}
		/**/
		else
		{

		}
	}

	/**
    * Get Savings By Product
    *
    * @param  get request segmentase = 1. Ritel, 2. Mikro
    * @param  array $branches
    * @param  array $dates
    * @return array Model
    */
	public function getAllbyProduct($segmentase, array $branches, $dates)
	{
		$model 		= $this->createModel();
		$data 		= $model->getAllbyProduct($segmentase, $branches, $dates);

		return $this->collect_product_by_region($data, $branches);
	}

	/**
    * (Product)
    * Group By Regional for Grand Total Savings By Product
    *
    * @param  std Model
    * @return array Model
    */
	public function collect_product_by_region($model, $branches)
	{
		return $model->groupBy('product_of_savings.id', 'savings_products.date_report')->get();	
	}

	/**
    * (Region, Branch, BranchOffice)
    * Group By Regional for Grand Total Savings
    *
    * @param  stdClass $model
    * @param  array $branch
    * @return group array stdclass
    */
    public function collect_by_region($model, $branches, $branchesOffice = null)
    {
    	if(is_array($branchesOffice))
    	{
    		return $model->whereIn('savings_products.office_code', $branchesOffice)
    				 ->groupBy('savings_products.date_report', 'product_of_savings.id')
    				 ->get();
    	}
    	else
    	{
    		return $model->whereIn('savings_products.branch_code', $branches)
    				 ->groupBy('savings_products.date_report', 'product_of_savings.id')
    				 ->get();
    	}
    	
    }

    /**
    * (Region, Branch, BranchOffice)
    * Group By Branch for subtotal savings
    *
    * @param  stdClass $model
    * @param  array $branch
    * @return group array stdclass
    */
    public function collect_by_branch($model, $branches)
    {
    	/**
		* @event : branch ( branch total, grandtotal ) 
		* @param   array $branches (must be array)
		* @return  stdclass branch
		*/
		if(is_array($branches))
		{
			return $model->WhereIn('savings_products.branch_code', $branches)
						 ->groupBy('savings_products.branch_code', 'savings_products.date_report', 'product_of_savings.id')
						 ->orderBy('savings_products.branch_code')
						 ->get();
		}
		/**
		* @event : get brancOffice on 1 branch
		* @param   array $branches (not must be array)
		* @return  stdclass branch
		*/
		else
		{
			return $model->Where('savings_products.branch_code', $branches)
						 ->groupBy('savings_products.branch_code', 'savings_products.date_report', 'product_of_savings.id')
						 ->get();
		}
    }

    /**
    * (Region, Branch, BranchOffice)
    * Group By BranchOffice for subtotal savings
    *
    * @param  stdClass $model
    * @param  array $branch
    * @return group array stdclass
    */
    public function collect_by_branchOffice($model, $branches, $branchesOffice = null, $segmentase)
    {
    	if( is_array($branches) and is_array($branchesOffice) )
    	{
    		return $model->whereIn('savings_products.office_code', $branchesOffice)
    					 ->whereIn('branch_office.category', $this->getBranchOffice($segmentase))
    					 ->groupBy('savings_products.office_code', 'savings_products.date_report', 'product_of_savings.id')
    					 ->get();
    	}
    	else if(is_array($branches))
    	{
    		return $model->where('savings_products.branch_code', '=', $branches)
    					 ->whereIn('branch_office.category', array(1, 2, 3))
    					 ->groupBy('savings_products.office_code', 'savings_products.date_report', 'product_of_savings.id')
    					 ->get();
    	}
    }

    public function getBranchOffice($segmentase)
    {
    	if ($segmentase == 'ritel') 
    		return array(1,2,3);

    	return array(4);
    }

	/**
	 * Create a new instance of the model.
	 *
	 * @return Illuminate\Database\Eloquent\Model
	 */
	public function createModel()
	{
		$class = '\\'.ltrim($this->model, '\\');

		return new $class;
	}
}