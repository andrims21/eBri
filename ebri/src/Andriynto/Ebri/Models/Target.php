<?php namespace Andriynto\Ebri\Models;

use Illuminate\Database\Eloquent\Model;
use Andriynto\Ebri\Models\TargetInterface;
use DB;

class Target extends Model implements TargetInterface
{

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'target_product';

	/**
     * The attributes that aren't mass assignable.
     *
     * @var array
     */
    protected $guarded = array();

    /**
     * Returns the option's table name.
     *
     * @return string
     */
    public function getTable()
    {
        return $this->table;
    }

    /**
     * Returns the option's ID.
     *
     * @return mixed
     */
    public function getId()
    {
        return $this->getKey();
    }

    /**
     * Saves the option.
     *
     * @param  array  $options
     * @return bool
     */
    public function save(array $options = array())
    {
        return parent::save();
    }

    /**
     * Delete the option.
     *
     * @return bool
     */
    public function delete()
    {
        return parent::delete();
    }

    /**
     * Get Product RKA
     *
     * @return array
     */
     public function ProductOnTarget()
     {
        $product = DB::table($this->table)
                  ->select('target_product.product as productId', 'product_of_savings.product')
                  ->leftJoin('product_of_savings', 'target_product.product', '=', 'product_of_savings.id')
                  ->groupBy('target_product.product')
                  ->get();

        return $product;
     }

     /**
     * Get branch on product Target
     *
     * @return array
     */
     public function BranchOfficeOnTarget()
     {
        $branch = DB::table($this->table)
                  ->select('branch_office.description', 'target_product.branch', 'target_product.branch_office')
                  ->leftJoin('branch_office', 'target_product.branch_office', '=', 'branch_office.id')
                  ->groupBy('target_product.branch_office')
                  ->get();

        return $branch;
     }

     /**
     * Get TargetRitel
     *
     * @return array
     */
     public function getTargetRitel()
     {
        $target_ritel = DB::table($this->table)
                        ->select('product_of_savings.product', 'product_of_savings.id as productId','branch.name', 'branch_office.id',
                           'branch_office.branch' ,'target_product.rekening', 'target_product.instanding')
                        ->leftJoin('product_of_savings', 'target_product.product', '=', 'product_of_savings.id')
                        ->leftJoin('branch', 'target_product.branch', '=', 'branch.id')
                        ->leftJoin('branch_office', 'target_product.branch_office', '=', 'branch_office.id')
                        ->groupBy('productId', 'target_product.branch_office')
                        ->orderBy('target_product.branch')
                        ->get();

        return $target_ritel;
     }

     public function getTargetRitelPerProduct()
     {
        $target_ritel = DB::table($this->table)
                        ->select(DB::raw('product_of_savings.product, product_of_savings.id as productId,
                            branch.name, branch_office.id, branch_office.branch,
                           round(sum(target_product.rekening), 0) as rekening,
                           round(sum(target_product.instanding), 0) as instanding'))
                        ->leftJoin('product_of_savings', 'target_product.product', '=', 'product_of_savings.id')
                        ->leftJoin('branch', 'target_product.branch', '=', 'branch.id')
                        ->leftJoin('branch_office', 'target_product.branch_office', '=', 'branch_office.id')
                        ->groupBy('productId')
                        ->orderBy('target_product.branch')
                        ->get();

        return $target_ritel;
     }

}