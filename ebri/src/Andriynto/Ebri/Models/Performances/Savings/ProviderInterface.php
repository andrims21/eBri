<?php namespace Andriynto\Ebri\Models\Performances\Savings;

Interface ProviderInterface
{
	public function getAllDate();

	public function getDate($dates);
	
	public function findByDate($branches, $branchesOffice, $dates, $product, $segementase);

}