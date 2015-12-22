@extends('ebri::layouts.master')

@section('content')
    <div class="ebri-bigboard ebri-landpage">
        <div class="ebri-container">
            <h1><a href="{{ URL::to('/') }}"><img src="{{ URL::asset('/packages/andriynto/ebri/images/ebri-logo-big.png') }}" alt="{{ @option('brand') }}"></a><span class="txtError404">4<i class="glyphicon glyphicon-ban-circle"></i>4</span></h1>
            <h3>{{ @translate('so sorry... the page you are trying to access is currently unavailable...') }}</h3>
            <i class="caret"></i>
        </div><!-- .ebri-container -->
    </div><!-- .ebri-bigboard -->

    <div class="ebri-container">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-md-offset-4">
                    <a class="btn btn-lg btn-primary btn-block" href="{{ URL::to('/') }}">{{ @translate('Go to Homepage') }}</a>
                </div>
            </div><!-- .row -->
        </div><!-- .container -->
    </div><!-- .ebri-container -->
@stop