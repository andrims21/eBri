@extends('ebri::layouts.backend')

@section('header_assets')

<link href="{{ URL::asset('/packages/andriynto/ebri/js/plugins/iCheck/skins/square/green.css') }}" rel="stylesheet">
<!-- jQuery File Upload -->
<link href="{{ URL::asset('/packages/andriynto/ebri/js/plugins/markitup/skins/simple/style.css') }}" rel="stylesheet">
<link href="{{ URL::asset('/packages/andriynto/ebri/js/plugins/markitup/sets/default/style.css') }}" rel="stylesheet">
<link href="{{ URL::asset('/packages/andriynto/ebri/css/vendor/font-awesome.min.css') }}" rel="stylesheet">


<!-- Select2 -->
<link href="{{ URL::asset('/packages/andriynto/ebri/css/vendor/select2.css') }}" rel="stylesheet">
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

    <div id="app-wrapper" class="ebri-container"></div>

    <script id="dashboard-template" type="text/html">
        <div class="page-content row">
            <div class="page-header">
                <div class="page-title">
                    <h3><i class="fa fa-desktop"></i> Dashboard <small> Summary info site </small></h3>
                </div>
                <ul class="breadcrumb">
                    <li><a href="javascript:void(0);">Home</a></li>
                    <li class="active">Dashboard</li>
                </ul>
            </div>
        </div>
        <div class="page-content-wrapper">
            <section>
                <div class="row m-l-none m-r-none m-t  white-bg shortcut ">
                    <div class="col-sm-6 col-md-3 b-r  p-sm ">
                        <span class="pull-left m-r-sm text-navy"><i class="fa fa-plus-circle"></i></span> 
                        <a href="javascript:void(0);" class="clear">
                            <span class="h3 block m-t-xs"><strong>  Database  </strong>
                            </span> <small class="text-muted text-uc">  Check Schedule and Maintenance Database </small>
                        </a>
                    </div>
                    <div class="col-sm-6 col-md-3 b-r  p-sm">
                        <span class="pull-left m-r-sm text-info">   <i class="fa fa-cogs"></i></span>
                        <a href="javascript:void(0);" class="clear">
                            <span class="h3 block m-t-xs"><strong> Setting</strong>
                            </span> <small class="text-muted text-uc">   Setting Up your application login option , sitename , email etc.  </small> 
                        </a>
                    </div>
                    <div class="col-sm-6 col-md-3 b-r  p-sm">
                        <span class="pull-left m-r-sm text-warning">    2<i class="fa fa-sitemap"></i></span>
                        <a href="javascript:void(0);" class="clear">
                        <span class="h3 block m-t-xs"><strong>  Site Menu </strong></span>
                        <small class="text-muted text-uc">  Manage Menu for your application frontend or backend  </small> </a>
                    </div>
                    <div class="col-sm-6 col-md-3 b-r  p-sm">
                        <span class="pull-left m-r-sm ">    <i class="fa fa-users"></i></span>
                        <a href="javascript:void(0);" class="clear">
                        <span class="h3 block m-t-xs"><strong> User &amp; Group</strong>
                        </span> <small class="text-muted text-uc">  Manage groups and users and grant what module and menu are accesible </small> </a>
                    </div>
                </div>
            </section>
        </div>
    </script>

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
</div>
@stop


@section('footer_assets')
<script type="text/javascript">
    require([baseUrl + '/packages/andriynto/ebri/js/backend.js'], function() {
        require(['app'], function(App){
            App.initialize();

            require(['manager'], function(App){
                App.initialize();
            });
        });
    });
</script>
@stop