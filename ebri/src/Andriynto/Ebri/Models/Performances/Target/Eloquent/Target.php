<?php namespace Andriynto\Ebri\Models\Performances\Target\Eloquent;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
use Andriynto\Ebri\Models\Performances\Target\TargetInterface;
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
     * Delete the Target.
     *
     * @return bool
     */
    public function delete()
    {
        return parent::delete();
    }

     /**
     * Get Target By Saving
     *
     * @return std array
     */
     public function targetSavings($products)
     {
        $data       = DB::table($this->table)
                        ->select(DB::raw(" product_of_savings.product, product_of_savings.id as productId,
                                           branch.name, branch_office.id, branch_office.branch, branch_office.description,
                                           round(SUM(target_product.rekening), 0) as rekening,
                                           round(SUM(target_product.instanding), 0) as instanding
                        "))
                        ->leftJoin('product_of_savings', 'target_product.product', '=', 'product_of_savings.id')
                        ->leftJoin('branch', 'target_product.branch', '=', 'branch.id')
                        ->leftJoin('branch_office', 'target_product.branch_office', '=', 'branch_office.id')
                        ->where('target_product.product', '=', $products)
                        ->orderBy('target_product.branch');

        return $data;

     }

    /**
    * Get Target By Product
    *
    * @return std array
    */
    public function TargetByProduct()
    {
        $data       = DB::table($this->table)
                        ->select(DB::raw(" product_of_savings.product, product_of_savings.id as productId,
                                           branch.name, branch_office.id, branch_office.branch,
                                           round(SUM(target_product.rekening), 0) as rekening,
                                           round(SUM(target_product.instanding), 0) as instanding
                        "))
                        ->leftJoin('product_of_savings', 'target_product.product', '=', 'product_of_savings.id')
                        ->leftJoin('branch', 'target_product.branch', '=', 'branch.id')
                        ->leftJoin('branch_office', 'target_product.branch_office', '=', 'branch_office.id')
                        ->orderBy('target_product.branch');

        return $data;
    }
}