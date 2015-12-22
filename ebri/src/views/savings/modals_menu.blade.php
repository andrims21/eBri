<div id="branchoffice-modal" class="modal ebri-modal fade" data-keyboard="false" data-backdrop="static">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <a class="close" data-dismiss="modal" aria-hidden="true">×</a>
                    <h4 class="modal-title">Report Retail Savings of Branch Office By Dates</h4>
                </div>
                {{ Form::open(array("url" => "savings/branchoffice?code=$code", "class" => "form-horizontal row")) }}
                <div class="col-sm-12 modal-body fadeInRight ">
                    <div class="form-group">
                        <label for="ipt" class=" control-label col-md-4">Products  </label>
                        <div class="col-md-8">
                            {{ Form::select('products[]', $option_products ,'', array('class' => 'input-sm col-sm-10', 'id' => 'chosen-select-products_branchOffice', 'placholder' => 'Choose Product Savings Retail') ) }}
                        </div>
                    </div>

                    <div id="branchOfice_lookup">
                        <div class="form-group">
                            <label for="ipt" class=" control-label col-md-4">Branch Office </label>
                            <div class="col-md-8">
                                {{ Form::select('branchesOffice[]', $option_branchoffice ,$option_branchoffice, array('multiple' => 'multiple' , 'class' => 'input-sm col-sm-12', 'id' => 'select_branchOffice_report') ) }}
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="ipt" class=" control-label col-md-4">Choose Dates  </label>
                        <div class="col-md-8">
                            {{ Form::select('dates[]', $option_date_report ,'2014-12-31', array('multiple' => 'multiple' , 'class' => 'input-sm col-sm-12', 'id' => 'select_date_branchOffice_report') ) }}
                        </div>
                    </div>

                    <div class="modal-footer">
                        <button class="btn btn-primary download-act" type="submit"><i class="fa fa-spinner"></i> Generate</button>
                        <a class="btn btn-default" data-dismiss="modal" aria-hidden="true">Close</a>
                    </div>
                {{ Form::close() }}
                </div>
            </div>
        </div>
    </div>

    <div id="branch-modal" class="modal ebri-modal fade" data-keyboard="false" data-backdrop="static">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <a class="close" data-dismiss="modal" aria-hidden="true">×</a>
                    <h4 class="modal-title">Report Retail Savings of Branch By Dates</h4>
                </div>
                {{ Form::open(array("url" => "savings/branch?code=$code", "class" => "form-horizontal row")) }}
                <div class="col-sm-12 modal-body fadeInRight ">
                    <div class="form-group">
                        <label for="ipt" class=" control-label col-md-4">Products  </label>
                        <div class="col-md-8">
                            {{ Form::select('products[]', $option_products ,'', array('class' => 'input-sm col-sm-10', 'id' => 'chosen-select-products', 'placholder' => 'Choose Product Savings Retail') ) }}
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="ipt" class=" control-label col-md-4">Branch  </label>
                        <div class="col-md-8">
                            {{ Form::select('branches[]', $option_branch ,$option_branch, array('multiple' => 'multiple' , 'class' => 'input-sm col-sm-12', 'id' => 'select_branch_report') ) }}
                        </div>
                    </div> 

                    <div class="form-group">
                        <label for="ipt" class=" control-label col-md-4">Choose Dates  </label>
                        <div class="col-md-8">
                            {{ Form::select('dates[]', $option_date_report ,'2014-12-31', array('multiple' => 'multiple' , 'class' => 'input-sm col-sm-12', 'id' => 'select_date_report') ) }}
                        </div>
                    </div>

                    <div class="modal-footer">
                        <button class="btn btn-primary download-act" type="submit"><i class="fa fa-spinner"></i> Generate</button>
                        <a class="btn btn-default" data-dismiss="modal" aria-hidden="true">Close</a>
                    </div>
                {{ Form::close() }}
                </div>
            </div>
        </div>
    </div>

    <div id="product-modal" class="modal ebri-modal fade" data-keyboard="false" data-backdrop="static">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <a class="close" data-dismiss="modal" aria-hidden="true">×</a>
                    <h4 class="modal-title">Report Retail Savings of Branch By Dates</h4>
                </div>
                {{ Form::open(array("url" => "savings/products?code=$code", "class" => "form-horizontal row")) }}
                <div class="col-sm-12 modal-body fadeInRight ">

                    <div class="form-group">
                        <label for="ipt" class=" control-label col-md-4">Choose Dates  </label>
                        <div class="col-md-8">
                            {{ Form::select('dates[]', $option_date_report ,'2014-12-31', array('multiple' => 'multiple' , 'class' => 'input-sm col-sm-12', 'id' => 'select_date_report_product') ) }}
                        </div>
                    </div>

                    <div class="modal-footer">
                        <button class="btn btn-primary download-act" type="submit"><i class="fa fa-spinner"></i> Generate</button>
                        <a class="btn btn-default" data-dismiss="modal" aria-hidden="true">Close</a>
                    </div>
                {{ Form::close() }}
                </div>
            </div>
        </div>
    </div>