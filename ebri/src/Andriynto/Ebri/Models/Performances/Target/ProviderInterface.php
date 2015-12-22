<?php namespace Andriynto\Ebri\Models\Performances\Target;

Interface ProviderInterface
{
	public function TargetByProduct();
	public function targetRitel($products, $branch, $branchOffice);
}