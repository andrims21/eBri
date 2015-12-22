@extends('ebri::layouts.backend')

@section('header_assets')

<link href="{{ URL::asset('/packages/andriynto/ebri/js/plugins/iCheck/skins/square/green.css') }}" rel="stylesheet">
<!-- jQuery File Upload -->
<link href="{{ URL::asset('/packages/andriynto/ebri/js/plugins/markitup/skins/simple/style.css') }}" rel="stylesheet">
<link href="{{ URL::asset('/packages/andriynto/ebri/js/plugins/markitup/sets/default/style.css') }}" rel="stylesheet">
<link href="{{ URL::asset('/packages/andriynto/ebri/css/vendor/font-awesome.min.css') }}" rel="stylesheet">


<!-- Select2 -->
<link href="{{ URL::asset('/packages/andriynto/ebri/css/vendor/select2.css') }}" rel="stylesheet">
<link href="{{ URL::asset('/packages/andriynto/ebri/css/vendor/multiple-select.css') }}" rel="stylesheet">
<link href="{{ URL::asset('/packages/andriynto/ebri/css/vendor/chosen.css') }}" rel="stylesheet">
<!-- jQuery UI -->
<link href="{{ URL::asset('/packages/andriynto/ebri/css/vendor/jquery-ui-1.10.4.custom.min.css') }}" rel="stylesheet">
<!-- jQuery File Upload -->
<link href="{{ URL::asset('/packages/andriynto/ebri/css/vendor/jquery.fileupload.css') }}" rel="stylesheet">
<link href="{{ URL::asset('/packages/andriynto/ebri/css/vendor/jquery.fileupload-ui.css') }}" rel="stylesheet">
<noscript><link rel="stylesheet" href="{{ URL::asset('/packages/andriynto/ebri/css/vendor/jquery.fileupload-noscript.css') }}"></noscript>
<noscript><link rel="stylesheet" href="{{ URL::asset('/packages/andriynto/ebri/css/vendor/jquery.fileupload-ui-noscript.css') }}"></noscript>

<!-- Swipebox -->
<link href="{{ URL::asset('/packages/andriynto/ebri/css/vendor/swipebox.min.css') }}" rel="stylesheet">
@stop



@section('content')
<div id="wrapper">
@include('ebri::layouts.menu')
    <div class="gray-bg " id="page-wrapper">
        @include('ebri::layouts.header_system')

    <div id="savings-wrapper" class="ebri-container"></div>

    <div id="content-loading-wrapper" class="ebri-container">
        <h1>
            <a href="{{ URL::to('/') }}">
                <img id="content-loading-gif" src="{{ URL::asset('/packages/andriynto/ebri/images/ajax-loader.gif') }}" alt="{{ @option('brand') }}" class="hide">
                <div id="content-loading-css" class="spinner hide">
                    <div class="double-bounce1"></div>
                    <div class="double-bounce2"></div>
                </div>
            </a>
        </h1>
    </div>

    <script id="savings-template" type="text/html">
        <div class="page-content row">
            <div class="page-header">
                <div class="page-title">
                    <h3><i class="fa fa-desktop"></i> Retail Savings <small> (Simpanan Ritel) </small></h3>
                </div>
                <ul class="breadcrumb">
                    <li><a href="javascript:void(0);">Home</a></li>
                    <li><a href="javascript:void(0);">Savings</a></li>
                    <li class="active">Overview</li>
                </ul>
            </div>
        </div>
    </script>

    <div id="branch-modal" class="modal ebri-modal fade" data-keyboard="false" data-backdrop="static">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <a class="close" data-dismiss="modal" aria-hidden="true">×</a>
                    <h4 class="modal-title">Report Retail Savings of Branch By Dates</h4>
                </div>
                {{ Form::open(array('url' => 'savings/retail/branch', 'class' => 'form-horizontal row')) }}
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
                {{ Form::open(array('url' => 'savings/retail/products', 'class' => 'form-horizontal row')) }}
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

    <div id="branchoffice-modal" class="modal ebri-modal fade" data-keyboard="false" data-backdrop="static">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <a class="close" data-dismiss="modal" aria-hidden="true">×</a>
                    <h4 class="modal-title">Report Retail Savings of Branch Office By Dates</h4>
                </div>
                {{ Form::open(array('url' => 'savings/retail/branchOffice', 'class' => 'form-horizontal row')) }}
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
</div>
@stop


@section('footer_assets')
<script type="text/javascript">
    require([baseUrl + '/packages/andriynto/ebri/js/backend.js'], function() {
        require(['app'], function(App){
            App.initialize();

            require(['savings'], function(App){
                App.initialize();
            });
        });
    });
</script>
@stop