<?php namespace Andriynto\Ebri\Models\Performances;

use Illuminate\Database\Eloquent\Model;
use Andriynto\Ebri\Models\Performances\SavingsInterface;
use DateTime;
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

    /**
     * get date availabe report Savings.
     *
     * @return bool
     */
    public function getAllDate()
    {
        $tanggal = new \Andriynto\Ebri\Libs\IndonesiaDate();
        $dates  = [];
        $query = DB::table($this->table)
                    ->select('date_report')
                    ->groupBy('date_report')
                    ->orderBy('date_report', 'desc')
                    ->get();
        foreach($query as $date)
        {
            $dates[$date->date_report] = $tanggal->tgl_indo($date->date_report);
        }

        return $dates;
    }

    /**
     * get date availabe report Savings.
     *
     * @return bool
     */
    public function AchievmentsDate($this_month, $current_month)
    {
        $dates           = ['2014-12-31'];
        $current_month   = DB::select(DB::raw("SELECT date_report FROM savings_products WHERE DATE_FORMAT(date_report, '%m') = '$current_month' group by date_report order by date_report desc limit 1"));
        //$this_month    = DB::select(DB::raw("SELECT  date_report  FROM savings_products WHERE DATE_FORMAT(date_report, '%m') = '$this_month' group by date_report order by date_report"));
        $this_month      = DB::select(DB::raw("SELECT  date_report  FROM savings_products WHERE DATE_FORMAT(date_report, '%m') = '$this_month' group by date_report order by date_report desc limit 1"));
        if(!empty($current_month))
        {
            array_push($dates, $current_month[0]->date_report);
        }
        // if(!empty($this_month))
        // {
        //  foreach($this_month as $date)
        //      {
        //          array_push($dates, $date->date_report);
        //      }
        // }
        if(!empty($this_month))
        {
            array_push($dates, $this_month[0]->date_report);
        }
        return $dates;
    }

    public function findByDates($dates)
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
                    ->where('savings_products.id_segmentase_product', '=', 1)
                    ->whereIn('savings_products.date_report', $dates)
                    ->groupBy('product_of_savings.id')
                    ->groupBy('savings_products.date_report')
                    ->get();
    }

    public function findBy($branches, $dates)
    {
        $query = DB::table($this->table)
                    ->select(DB::raw(
                        'savings_products.branch_code,
                        product_of_savings.product,
                        product_of_savings.id as productId,
                        savings_products.date_report,
                        round(sum(savings_products.rekening), 0) as rekening,
                        round(sum(savings_products.instanding)/1000000, 0) as instanding'
                    ))
                    ->leftJoin('product_of_savings', 'savings_products.id_saving_product', '=', 'product_of_savings.id')
                    ->where('savings_products.id_segmentase_product', '=', 1)
                    ->whereIn('savings_products.branch_code', $branches)
                    ->whereIn('savings_products.date_report', $dates)
                    ->groupBy('savings_products.branch_code', 'savings_products.date_report', 'product_of_savings.id')
                    ->get();

        echo "<pre>";
            print_r($query);
        echo "</pre>";
    }

}