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
    <div class="gray-bg ebri-admin" id="page-wrapper">
        @include('ebri::layouts.header_system')

    <div id="setting-wrapper" class="ebri-container ebri-fm-dataTable"></div>

    <script id="branches-template" type="text/html">
        <div class="ebri-admin-inputData">
            <div class="ebri-fm-dataTable">
                <div id="branch-wrapper" class="panel-group"></div><!-- #accordion.panel-group -->
                <div id="branch-loader" class="hide">
                    <img id="collection-loading-gif" src="{{ URL::asset('/packages/andriynto/ebri/images/ajax-loader.gif') }}" alt="{{ @option('brand') }}" class="hide">
                    <div id="collection-loading-css" class="spinner hide">
                        <div class="double-bounce1"></div>
                        <div class="double-bounce2"></div>
                    </div>
                </div>
            </div><!-- .ebri-fm-dataTable -->
        </div><!-- .ebri-admin-inputData -->
    </script>

    <script id="branch-template" type="text/html">
            
    </script>

</div>
@stop


@section('footer_assets')
<script type="text/javascript">
    require([baseUrl + '/packages/andriynto/ebri/js/backend.js'], function() {
        require(['app'], function(App){
            App.initialize();

            require(['setting'], function(App){
                App.initialize();
            });
        });
    });
</script>
@stop