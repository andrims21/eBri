<?php namespace Andriynto\Ebri;

use Andriynto\Ebri\Models\Performances\Savings\Eloquent\Provider as SavingsProvider,
	Andriynto\Ebri\Models\Performances\Savings\ProviderInterface as SavingsProviderInterface;
use Andriynto\Ebri\Models\Performances\Target\Eloquent\Provider as TargetProvider,
	Andriynto\Ebri\Models\Performances\Target\ProviderInterface as TargetProviderInterface;



use Andriynto\Ebri\Models\Performance\Savings\SavingsInterface;
use Andriynto\Ebri\Models\Performance\Target\TargetInterface;

class Ebri
{
	protected $savingProvider;

	protected $targetProvider;

	public function __construct(
		TargetProviderInterface 		$targetProvider = null,
		SavingsProviderInterface 		$savingProvider = null
	)
	{
		$this->targetProvider       = $targetProvider ?: new TargetProvider;
	
		$this->savingProvider		= $savingProvider ?: new SavingsProvider;
	}

	/**
    * getBranch 
    *
    * @return View
    */
	public function getBranch($branches)
	{
		if( ! is_array($branches))
			return $this->savingProvider->getBranch();
		else
			return $branches;
	}

	/**
    * getBranch Office
    *
    * @return View
    */
	public function getBranchOffice($branchesOffice)
	{
		if( ! is_array($branchesOffice))
			return $this->savingProvider->getBranchOffice();
		else
			return $branchesOffice;
	}

	/**
    * get Date register on Savings.
    *
    * @return View
    */
	public function date($dates)
	{
		if( ! is_array($dates))
			return $this->savingProvider->getDate($dates);
		else
		{
			krsort($dates);
			foreach($dates as $date)
			{
				$dt[] = $date;
			}
			return $dt;
		}
	}

	/**
    * Show the products.
    *
    * @return View
    */
	public function getAllDate()
	{
		return $this->savingProvider->getAllDate();
	}

	/**
    * Get saving by date.
    *
    * @param  int $products
    * @param  array $branches
    * @param  array $branchOffice
    * @return stdclass
    */
	public function findSavingsByDate($branches, $branchesOffice = null, $dates = null, $products, $segmentase = null)
	{
		return $this->savingProvider->findByDate($branches, $branchesOffice, $dates, $products, $segmentase);
	}

	/**
    * get Target By Product.
    *
    * @param  segmentase
    * @return array
    */
	public function getTargetByProducts()
	{
		return $this->targetProvider->TargetByProduct();
	}

	/**
    * get Target Savings.
    *
    * @param  int $products
    * @param  array $branches
    * @param  array $branchOffice
    * @return stdclass
    */
	public function getTargetSavings($products, $branches = null, $branchOffice = null)
	{
		return $this->targetProvider->targetSavings($products, $branches, $branchOffice);
	}

	/**
    * get Product Savings.
    *
    * @param  segmentase
    * @param  array $branches
    * @param  array $dates
    * @return array
    */
	public function getProductSavings($segmentase, array $branches, $dates)
	{
		return $this->savingProvider->getAllbyProduct($segmentase, $branches, $dates);
	}
}