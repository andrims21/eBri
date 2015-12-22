<?php namespace Andriynto\Ebri\Models\Performances\Target\Eloquent;

use Illuminate\Database\Eloquent\Model;
use Andriynto\Ebri\Models\Performances\Target\ProviderInterface;
use Andriynto\Ebri\Models\Performances\Target\TargetInterface;
use DB;

class Provider implements ProviderInterface
{
	/**
	 * The Eloquent Savings Models.
	 *
	 * @var string
	 */
	protected $model = 'Andriynto\Ebri\Models\Performances\Target\Eloquent\Target';

	public function targetSavings($products, $branches, $branchOffice)
	{
		$model 		= $this->createModel();
		$data 		= $model->targetSavings($products);

		if(is_array($branches) and is_array($branchOffice))
		{
			return array(
				'region'		=> $this->collect_by_region($data, $branches, $branchOffice),
				'branches'		=> $this->collect_by_branch($data, $branches),
				'branchOffice'  => $this->collect_by_branchOffice($data, $branches, $branchOffice)
			);
		}
		else if(is_array($branches))
		{
			return array(
				'region' 		=> $this->collect_by_region($data, $branches, $branchOffice),
				'branches' 		=> $this->collect_by_branch($data, $branches),
				'branchOffice'  => $this->collect_by_branchOffice($data, $branches, $branchOffice)
			);
		}
	}

	/**
	 * Get Target Product.
	 *
	 * @return Illuminate\Database\Eloquent\Model
	 */
	public function TargetByProduct()
	{
		$model 		= $this->createModel();
		$data 		= $model->TargetByProduct();

		return $this->TargetProductByRegion($data);
	}

	/**
	 * Group Product ID for make Grand Total of Product
	 *
	 * @param  Model
	 * @return Illuminate\Database\Eloquent\Model
	 */
	public function TargetProductByRegion($model)
	{
		return $model->groupBy('productId')->get();
	}

	public function targetRitel($products, $branches, $branchOffice)
    {

    }

    /**
    * Group By Regional for Grand Total Savings By Branch
    *
    * @param  std Model
    * @return array Model
    */
    public function collect_by_region($model, $branch, $branchOffice)
    {
    	if( ! is_array($branchOffice))
    	{
    		return $model->whereIn('branch_office.branch', $branch)
    					 ->groupBy('productId')->get();
    	}
    	else
    	{
    		return $model->whereIn('branch_office.id', $branchOffice)
    					 ->groupBy('productId')
    					 ->get();
    	}
    }

    /**
    * Group By Branch
    *
    * @param  std Model
    * @return array Model
    */
    public function collect_by_branch($model, $branches)
    {
    	if( !is_array($branches))
    		return $model->where('branch_office.branch', '=', $branch)->get();

    	return $model->groupBy('target_product.branch')->get();
    }

    /**
    * Group By BranchOffice
    *
    * @param  std Model
    * @return array Model
    */
    public function collect_by_branchOffice($model, $branches, $branchOffice)
    {
    	if(is_array($branches) and is_array($branchOffice))
    	{
    		return $model->whereIn('branch_office.id', $branchOffice)
    			  ->groupBy('branch_office.id')
    			  ->get();
    	}
    	else
    	{
    		return $model->where('branch_office.branch', '=', $branches)
    					 ->groupBy('branch_office.id')
    					 ->get();
    	}
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