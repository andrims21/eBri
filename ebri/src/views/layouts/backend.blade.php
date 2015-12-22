<!DOCTYPE html>
<!--[if lt IE 7]> <html class="ie lt-ie10 lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>    <html class="ie lt-ie10 lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>    <html class="ie lt-ie10 lt-ie9"> <![endif]-->
<!--[if IE 9]>    <html class="ie lt-ie10"> <![endif]-->
<!--[if gt IE 9]> <html class="ie"> <![endif]-->
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ @option('brand') }}</title>
    <script src="{{ URL::asset('/packages/andriynto/ebri/js/vendor/jquery/jquery-1.10.2.min.js') }}"></script>
    <!-- Bootstrap core CSS -->
     <link href="{{ URL::asset('/packages/andriynto/ebri/css/vendor/bootstrap.min.css') }}" rel="stylesheet">

    @yield('header_assets')

    <!-- Custom CSS -->
    <link href="{{ URL::asset('/packages/andriynto/ebri/css/dfadmin.css') }}" rel="stylesheet">

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
        <script src="{{ URL::asset('/packages/andriynto/ebri/js/vendor/html5shiv.js') }}"></script>
        <script src="{{ URL::asset('/packages/andriynto/ebri/js/vendor/respond.min.js') }}"></script>
    <![endif]-->

    <!-- Favicons -->
    <link rel="shortcut icon" type="image/x-icon" href="{{ URL::asset('/packages/andriynto/ebri/images/favicon.ico') }}">
    <link rel="apple-touch-icon" sizes="57x57" href="{{ URL::asset('/packages/andriynto/ebri/images/apple-touch-icon-57x57.png') }}">
    <link rel="apple-touch-icon" sizes="114x114" href="{{ URL::asset('/packages/andriynto/ebri/images/apple-touch-icon-114x114.png') }}">
    <link rel="apple-touch-icon" sizes="72x72" href="{{ URL::asset('/packages/andriynto/ebri/images/apple-touch-icon-72x72.png') }}">
    <link rel="apple-touch-icon" sizes="144x144" href="{{ URL::asset('/packages/andriynto/ebri/images/apple-touch-icon-144x144.png') }}">
    <link rel="apple-touch-icon" sizes="60x60" href="{{ URL::asset('/packages/andriynto/ebri/images/apple-touch-icon-60x60.png') }}">
    <link rel="apple-touch-icon" sizes="120x120" href="{{ URL::asset('/packages/andriynto/ebri/images/apple-touch-icon-120x120.png') }}">
    <link rel="apple-touch-icon" sizes="76x76" href="{{ URL::asset('/packages/andriynto/ebri/images/apple-touch-icon-76x76.png') }}">
    <link rel="apple-touch-icon" sizes="152x152" href="{{ URL::asset('/packages/andriynto/ebri/images/apple-touch-icon-152x152.png') }}">
    <link rel="icon" type="image/png" sizes="196x196" href="{{ URL::asset('/packages/andriynto/ebri/images/favicon-196x196.png') }}">
    <link rel="icon" type="image/png" sizes="160x160" href="{{ URL::asset('/packages/andriynto/ebri/images/favicon-160x160.png') }}">
    <link rel="icon" type="image/png" sizes="96x96" href="{{ URL::asset('/packages/andriynto/ebri/images/favicon-96x96.png') }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ URL::asset('/packages/andriynto/ebri/images/favicon-32x32.png') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ URL::asset('/packages/andriynto/ebri/images/favicon-16x16.png') }}">
    <meta name="msapplication-TileColor" content="#303740">
    <meta name="msapplication-TileImage" content="{{ URL::asset('/packages/andriynto/ebri/images/mstile-144x144.png') }}">
    <meta name="msapplication-square70x70logo" content="{{ URL::asset('/packages/andriynto/ebri/images/mstile-70x70.png') }}">
    <meta name="msapplication-square150x150logo" content="{{ URL::asset('/packages/andriynto/ebri/images/mstile-150x150.png') }}">
    <meta name="msapplication-square310x310logo" content="{{ URL::asset('/packages/andriynto/ebri/images/mstile-310x310.png') }}">
    <meta name="msapplication-wide310x150logo" content="{{ URL::asset('/packages/andriynto/ebri/images/mstile-310x150.png') }}">

    <script type="text/javascript">
        var isSupportAnimation = false;
        var baseUrl = '{{ URL::to('/') }}';
        //var baseUrl = "http://192.168.43.67";
        var basePath = '{{ $basePath }}';
        var apiUrl = baseUrl + '/api/v1';
        var currentUrlPath = '{{ str_replace(URL::to('/'), '', URL::current('/')) }}';
        var csrfToken = '{{ csrf_token() }}';
        var atTtl = {{ (Config::get('andriynto/api::oauth2.grant_types.authorization_code.access_token_ttl') - 100) * 1000 }};
        var errorAJAXMessage = '{{ @translate("There is a problem while contacting our server, please try again, or contact us.") }}';
        var uploadFileChunkSize = {{ @option('upload_file_chunk_size') }};
        var bodyWidth = 0;
        var bodyHeight = 0;
    </script>
</head>

<body class="sxim-init minimize-sidemenu" cz-shortcut-listen="true">
    
    
    @yield('header')

    @yield('content')

    <div class="footer fixed">
        <div class="pre-header">
            <div class="col-md-6 col-sm-6 left">
                <ul class="list-unstyled list-inline">
                    <li>
                        <strong>Copyright</strong> © 2015 . eBri Version 1.00 Kanwil Medan
                        | author <a>andriynto@bri.co.id</a>
                    </li>     
                </ul>  
            </div>

            <div class="col-md-6 col-sm-6 right">
                <ul class="list-unstyled list-inline pull-right">
                    <li><a href="javascript:void(0);"><i class="fa fa-user "></i> My Account</a></li>
                    <li><a href="javascript:void(0);"><i class="fa fa-desktop"></i> Dashboard</a></li> 
                    <li><a href="javascript:void(0);"><i class="fa  fa-sign-out"></i> Logout</a></li>                     
                </ul>
            </div>
        </div>
    </div><!-- #footer -->
    
    <script src="{{ URL::asset('/packages/andriynto/ebri/js/vendor/require.js') }}"></script>
    @yield('footer_assets')

</body>


</html>