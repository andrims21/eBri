<?php namespace Andriynto\Ebri\Supports;
 
use DB;
class Template
{

    /**
     * The branches.
     *
     * @var Array
     */
    protected $branches;

    /**
     * The branchesOffice.
     *
     * @var Array
     */
    protected $branchesOffice;

    /**
     * The Products.
     *
     * @var Array
     */
    protected $products;

	/**
     * Create a new instance.
     *
     * @param  Array $options
     * @return void
     */
    public function __construct($branches = array(), $branchesOffice = array(), $products = array () )
    {
        $this->branches = $branches;
        $this->branchesOffice = $branchesOffice;
        $this->products = $products;
    }

    /**
     * The setbranches.
     *
     * @var Array
     */
    public function Branch()
    {
        return $this->branches;
    }

    /**
     * The setbranchesOffice.
     *
     * @var Array
     */
    public function branchOffice()
    {
        return $this->branchesOffice;
    }

    /** 
    * @return Section Selected Value Option **/

    /**
     * get All Branch (option choosing Branch)
     *
     * @param model Array
     */
    public function getAllBranch()
    {
        $list = [];

        foreach($this->branches as $branch)
        {
            $list[$branch->id] = $branch->id." -- ".$branch->name;
        }
       
        return $list;
    }

    /**
     * get All BranchOffice (option choosing Branch)
     *
     * @param model Array
    */
    public function getAllBranchOffice()
    {
        $list = [];

        foreach($this->branchesOffice as $branchOffice)
        {
            $list[$branchOffice->id] = $branchOffice->id." -- ".$branchOffice->description;
        }
       
        return $list;
    }

    /**
     * get Option Group Branch with BranchOffice (option choosing Branch)
     *
     * @param model Array
     */
    public function getAllOptGroup()
    {
        $optGroup  = [];
        foreach($this->branches as $branch)
        {
            $collectBranch = [];
            foreach($this->branchesOffice as $branchOffice)
            {
                if($branch->id == $branchOffice->branch)
                {
                    //array_push($collectBranch, $branchOffice->id.' --- '.$branchOffice->description);
                    $collectBranch[$branchOffice->id] = $branchOffice->id.' --- '.$branchOffice->description;
                }
            }
             $optGroup[$branch->id] = $collectBranch;
        }
        return $optGroup;
    }

    /**
     * get Option Products (option choosing Branch)
     *
     * @param model Array
     */
    public function getAllProducts()
    {
        $list = [];

        foreach($this->products as $product)
        {
            $list[$product->id] = $product->id." -- ".$product->product;
        }
       
        return $list;
    }

    /**
     * Get detail product
     *
     * @param  model Array
     * @return string
     */
    public function getProductById($id)
    {
        $branch = DB::table('product_of_savings')
                    ->find($id);

        return $branch;
    }

    /** End Section Selected Value Option **/



    /** 
    * @return Extraction Processing By Branch or BranchOffice **/

    /**
     * get All Branch (option choosing Branch)
     *
     * @param model Array
     */
    public function extract_target_by_branch()
    {
    	$list = [];
        foreach($this->branches as $branch)
        {
            foreach($model as $data)
            {
                if(isset($data->branch) and $branch->id == $data->branch )
                {
                    $list[$data->branch] = $data;
                }
            }
        }

        return $list;   
    }

    /**
     * (Target RKA)
     * Re-arrange array target with branch code
     *
     * @param model Array
     */
    public function extraction_target_by_branch($model)
    {
    	$list = [];
        foreach($this->branches as $branch)
        {
            foreach($model as $data)
            {
                if(isset($data->branch) and $branch->id == $data->branch )
                {
                    $list[$data->branch] = $data;
                }
            }
        }
        return $list;	
    }

    public function extraction_target_by_branchOffice($model)
    {
        $list = [];
        foreach($this->branchesOffice as $branchOffice)
        {
            foreach($model as $data)
            {
                if(isset($data->id) and $branchOffice->id == $data->id )
                {
                    $list[$data->branch][$branchOffice->id] = $data;
                }
            }
        }

        return $list;
    }



    /** 
     * (Savings)
     * Re-arrange savings array by branch and date
     *
     * @param model Array
     */
    public function extraction_of_regional_by_date($model, $dates)
    {
        $report_by_regional_of_date = [];
        foreach($model as $report)
        {
            foreach($dates as $date)
            {
                if(isset($report->date_report) && ($report->date_report)  == $date )
                {
                    $report_by_regional_of_date[$date] = $report;
                }
            }
        }

        return $report_by_regional_of_date;
    }

    public function extraction_of_branch_by_date($model, $dates)
    {
        $report_by_branch_of_date = [];
        foreach($model as $report)
        {
            foreach($dates as $date)
            {
                if(isset($report->date_report) && ($report->date_report)  == $date )
                {
                    $report_by_branch_of_date[$report->branch][$date] = $report;
                }
            }
        }

        return $report_by_branch_of_date;
    }

    public function extraction_of_branchOffice_by_date($branches, $model, $dates)
    {
        $report_by_branch_of_branch_and_date = [];
        foreach($branches as $branch)
        {
            foreach($model as $report)
            {
                if(isset($branch->branch) and $branch->branch == $report->branch)
                {
                    foreach($dates as $date)
                    {
                        if(isset($report->date_report) && ($report->date_report)  == $date )
                        {
                            $report_by_branch_of_branch_and_date[$report->productId][$branch->branch][$report->office_code][$date] = $report;
                        }
                    }
                }
            }
        }

        return $report_by_branch_of_branch_and_date;
    }
    /** End Section Processing By Products By Branch or BranchOffice **/

    /** 
    * @return Extraction Processing By Branch or BranchOffice **/

    /**
     * get All Branch (option choosing Branch)
     *
     * @param model Array
     */
    public function extraction_product_by_date($model, $dates)
    {
        $report_by_product = [];
        foreach($model as $report)
        {
            foreach($dates as $date)
            {
                if(isset($report->date_report) && ($report->date_report)  == $date )
                {
                    $report_by_product[$report->product][$date] = $report;
                }
            }
        }

        return $report_by_product;
    }
    /** End Section Processing By Products By Branch or BranchOffice **/



    /**
    * Set Header and Information table Report
    *
    * @param model Array
    */

    /**
     * Set Header table report
     *
     * @param dates
     */
    public function header($dates)
    {
    	$tanggal = new \Andriynto\Ebri\Libs\IndonesiaDate();
        $rowHeader = [];
        foreach($dates as $date)
        {
            array_push($rowHeader, $tanggal->tgl_indo($date));
        }

        return $rowHeader;
    }

    /**
     * Set Information table header
     *
     * @param dates
     */
    public function titleHeaderSavings($data)
    {
    	$titleTable = array();
        for ($j = 0; $j <= count($data) - 1; $j++) {
            if ($j % 2 == 0) {
                $title = "Rekening";
            } else {
                $title = "Instanding";
            }
            array_push($titleTable, $title);
        }

        for ($j = 0; $j <= count($data) - 1; $j++) {
            if ($j % 2 == 0) {
                if ((count($data) - 1) % 2 == 0)
                    $title = "Instanding";
                else
                    $title = "Rekening";
            }else {
                if ((count($data) - 1)  % 2 == 1)
                    $title = "Instanding";
                else
                    $title = "Rekening";
            }
            array_push($titleTable, $title);
        }
        
        return $titleTable;
    }
    /** End Set Header and Information Table Report **/

    /**
    * Set Header and Information table Report
    *
    * @param model Array
    */

    /**
     * Set Parameter for Export Parsing array url parameter
     *
     * @param array
     */
    public function setParameterDateExport($dates)
    {
        $aDates = $dates;
        //$url = 'http://ebri.dev/savings?';
        $url = implode('&amp;', array_map(
                function($key, $val)
                {
                    return 'dates[' . urlencode($key) . ']=' . urlencode($val);
                },
                    array_keys($aDates), $aDates)
                );

        return $url;
    }

    /**
     * Set Parameter for Export Parsing array Branch url parameter
     *
     * @param array
     */
    public function setParameterBranchOfficeExport($branchOffice)
    {
        $aBranchOffice = $branchOffice;
        $url = implode('&amp;', array_map(
                function($key, $val)
                {
                    return 'branchesoffice[' . urlencode($key) . ']=' . urlencode($val);
                },
                    array_keys($aBranchOffice), $aBranchOffice)
                );

        return $url;
    }

    /** Set Parameter for Export Parsing array url parameter **/

}