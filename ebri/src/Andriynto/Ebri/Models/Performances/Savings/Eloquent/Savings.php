<?php namespace Andriynto\Ebri\Models\Performances\Savings\Eloquent;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
use Andriynto\Ebri\Models\Performances\Savings\SavingsInterface;
use DB;

class Savings extends Model implements SavingsInterface
{
	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'savings_products';

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

	public function getSavings($branches, array $dates, $product, $segmentase)
	{
		$query = DB::table($this->table)
                    ->select(DB::raw(
                        'branch.name,
                        savings_products.office_code as office_code,
                        savings_products.branch_code as branch,
                        branch_office.description,
                        product_of_savings.product,
                        product_of_savings.id as productId,
                        savings_products.date_report,
                        round(sum(savings_products.rekening), 0) as rekening,
                        round(sum(savings_products.instanding)/1000000, 0) as instanding'
                    ))
                    ->leftJoin('product_of_savings', 'savings_products.id_saving_product', '=', 'product_of_savings.id')
                    ->leftJoin('branch', 'savings_products.branch_code', '=', 'branch.id')
                    ->leftJoin('branch_office', 'savings_products.office_code', '=', 'branch_office.id')
                    ->where('savings_products.id_segmentase_product', '=', $this->getSegmentase($segmentase))
                    ->where('savings_products.id_saving_product', '=', $product)
                    ->whereIn('savings_products.date_report', $dates);

        return $query;
	}

    public function getAllByProduct($segmentase, array $branches, array $dates)
    {
        return $query = DB::table($this->table)
                    ->select(DB::raw(
                        'product_of_savings.product,
                        product_of_savings.id as productId,
                        savings_products.date_report,
                        round(sum(savings_products.rekening), 0) as rekening,
                        round(sum(savings_products.instanding)/1000000, 0) as instanding'
                    ))
                    ->leftJoin('product_of_savings', 'savings_products.id_saving_product', '=', 'product_of_savings.id')
                    ->where('savings_products.id_segmentase_product', '=', $this->getSegmentase($segmentase))
                    ->whereIn('savings_products.date_report', $dates)
                    ->orderBy('product_of_savings.product');
    }

    public function getSegmentase($segmentase)
    {
        if($segmentase == 'ritel')
            return 1;
        else if($segmentase == 'mikro')
            return 2;
    }

}