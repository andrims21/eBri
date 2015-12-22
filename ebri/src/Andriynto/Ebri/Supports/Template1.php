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

    /** Branch **/
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

    public function getAllBranchOffice()
    {
        $list = [];

        foreach($this->branchesOffice as $branchOffice)
        {
            $list[$branchOffice->id] = $branchOffice->id." -- ".$branchOffice->description;
        }
       
        return $list;
    }

    public function BranchSelect($branches)
    {
        $branch = DB::table('branch')
                    ->whereIn('id', $branches)
                    ->get();
        return $branch;
    }



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
    /** End Branch **/

    /** Product **/
    /**
     * get All products (option choosing Products)
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

    public function getAllBranchOfficeOrder()
    {
        $query = DB::table('branch_office')->orderBy('branch')->get();
        $list = [];

        foreach($query as $branchOffice)
        {
            $list[$branchOffice->id] = $branchOffice->id." -- ".$branchOffice->description;
        }
       
        return $list;
    }

    /**
     * get All products (option choosing Products)
     *
     * @param model Array
     */
    public function getProductById($id)
    {
        $branch = DB::table('product_of_savings')
                    ->find($id);

        return $branch;
    }
    /** End Product **/

    public function saveBranchInstanding($model, $targetModel)
    {
        $products = array(
            'kode_cabang', 'kode', 'cabang', 'giro_korperasi', 'giro_ritel', 'britama_umum', 'britama_bisnis', 'britama_junio',
            'britama_rencana', 'britama_valas', 'simpedes', 'tabungan_lainnya', 'deposito'
        );
        $product_rekening = array(
            'kode_cabang', 'kode', 'cabang', 'rekening_giro_korperasi', 'rekening_giro_ritel', 'rekening_britama_umum', 'rekening_britama_bisnis', 
            'rekening_britama_junio', 'rekening_britama_rencana', 'rekening_britama_valas', 'rekening_simpedes',
            'rekening_tabungan_lainnya', 'rekening_deposito'
        );
       $list = [];
       DB::table('target_product')->delete();
        foreach($products as $index => $value)
        {
            if($index > 2)
            {
                foreach($this->branchesOffice as $branchesOffice)
                {
                    foreach($model as $item )
                    {
                        if(isset($branchesOffice->branch) && ($branchesOffice->branch)  == $item['kode_cabang'] )
                        {
                            if(isset($branchesOffice->id) && ($branchesOffice->id)  == $item['kode'] )
                            {
                                $save_instanding = $targetModel->create(
                                    array(
                                        'branch'        => $branchesOffice->branch,
                                        'branch_office' => $branchesOffice->id,
                                        'category'      => $branchesOffice->category,
                                        'product'       => $this->category_product(array_keys($item)[$index]),
                                        'instanding'    => $item[$value]
                                    )
                                );
                            }
                        }
                    }
                }
            }
        }

        foreach($product_rekening as $index => $value)
        {
            if($index > 2)
            {
                foreach($this->branchesOffice as $branchesOffice)
                {
                    foreach($model as $item )
                    {
                        if(isset($branchesOffice->branch) && ($branchesOffice->branch)  == $item['kode_cabang'] )
                        {
                            if(isset($branchesOffice->id) && ($branchesOffice->id)  == $item['kode'] )
                            {

                                $affectedRows = $targetModel->where('branch', '=', $branchesOffice->branch)
                                                            ->where('branch_office', '=', $branchesOffice->id)
                                                            ->where('category', '=', $branchesOffice->category)
                                                            ->where('product', '=', $this->category_product(array_keys($item)[$index]))
                                                            ->update(array('rekening' => $item[$value]) );
                            }
                        }
                    }
                }
            }
        }
    }

    /** Extract Branch */
    /**
     * The re-arrange array with branch code
     *
     * @param model Array
     */
    public function extract_target_by_branch($model)
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
    /** End Extract Branch */

    /** Extract Branch */
    /**
     * The re-arrange array with branch code
     *
     * @param model Array
     */
    public function extract_target_by_branch_office($model)
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
    /** End Extract Branch */


    /** Extract Target */
    /**
     * The re-arrange array with category
     *
     * @param model Array
     */
    public function extract_product_target($model)
    {
        $list = [];
        foreach($this->products as $product)
        {
            foreach($model as $data)
            {
                if(isset($data->productId) && $data->productId == $product->id)
                {
                    $list[$product->product] = $data;
                }
            }
        }
       
        return $list;
    }

     /**
     * The re-arrange array with category
     *
     * @param model Array
     */
    public function extract_branch_office_product($model)
    {
        $list = [];
        foreach($this->products as $product)
        {
            foreach($model as $data)
            {
                if(isset($data->productId) && $data->productId == $product->id)
                {
                    $list[$data->branch][$data->id][$product->product] = $data;
                }
            }
        }
       
        return $list;
    }

    /**
     * The re-arrange array with product
     *
     * @param model Array
     */
    public function extraction_product_date($model, $dates)
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

    /**
     * re-arrage array With branch and date
     *
     * @param model Array
     */
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

    /**
     * re-arrage array With branch and date
     *
     * @param model Array
     */
    public function extraction_of_branch_office_by_date($model, $dates)
    {
        $report_by_branch_of_date = [];
        foreach($model as $report)
        {
            foreach($dates as $date)
            {
                if(isset($report->date_report) && ($report->date_report)  == $date )
                {
                    $report_by_branch_of_date[$report->office_code][$date] = $report;
                }
            }
        }

        return $report_by_branch_of_date;
    }

    public function extraction_of_branch_office_by_branch_and_date($branches, $model, $dates)
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


    /** Set Table **/
    /**
     * The Header Report on Date
     *
     * @param model Array
     */
    public function setHeaderTable($dates)
    {
        $tanggal = new \Andriynto\Ebri\Libs\IndonesiaDate();
        $rowHeader = [];
        foreach($dates as $date)
        {
            array_push($rowHeader, $tanggal->tgl_indo($date));
        }

        //krsort($rowHeader);

        return $rowHeader;
    }

    /**
     * The Title of Savings Table
     *
     * @param model Array
     */
    public function setTitleHeaderTableSavings($data)
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

    /**
     * The Title of Loan Table
     *
     * @param model Array
     */
    public function setTitleHeaderTableLoan($data)
    {
        $titleTable = array();
        for ($j = 0; $j <= count($count) - 1; $j++) {
            if ($j % 2 == 0) {
                $title = "Debitur";
            } else {
                $title = "Outstanding";
            }
            array_push($titleTable, $title);
        }

        for ($j = 0; $j <= count($count) - 1; $j++) {
            if ($j % 2 == 0) {
                if ((count($count) - 1) % 2 == 0)
                    $title = "Outstanding";
                else
                    $title = "Debitur";
            }else {
                if ((count($count) - 1)  % 2 == 1)
                    $title = "Outstanding";
                else
                    $title = "Debitur";
            }
            array_push($titleTable, $title);
        }
        
        return $titleTable;
    }
    /** END Set Table **/


    public function category_product($product)
    {
        if($product == 'giro_ritel' || $product == 'rekening_giro_ritel')
            return 1;
        else if($product == 'britama_umum' || $product == 'rekening_britama_umum')
            return 2;
        else if($product == 'britama_bisnis' || $product == 'rekening_britama_bisnis')
            return 3;
        else if($product == 'britama_rencana' || $product == 'rekening_britama_rencana')
            return 4;
        else if($product == 'britama_junio' || $product == 'rekening_britama_junio' )
            return 5;
        else if($product == 'simpedes' || $product == 'rekening_simpedes')
            return 6;
        else if($product == 'tabunganku' || $product == 'rekening_tabunganku')
            return 7;
        else if($product == 'tabungan_haji' || $product == 'rekening_tabungan_haji')
            return 8;
        else if($product == 'tabungan_lainnya' || $product == 'rekening_tabungan_lainnya')
            return 9;
        else if($product == 'deposito' || $product == 'rekening_deposito')
            return 10;
        else if($product == 'giro_korperasi' || $product == 'rekening_giro_korperasi')
            return 11;
        else if($product == 'britama_valas' || $product == 'rekening_britama_valas')
            return 12;
    }

    /**
     * Generate date periode report
     *
     * @parameter Date end and last
     * @return array (december, last month, and current month)
     * 
     */
    public function getCurrentMonth()
    {
        return getDate()['mon'];
    }

}