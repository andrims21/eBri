@extends('ebri::layouts.master')

@section('content')
    {{ @option('home_info') }}
    
    <div class="ebri-container">
        <div class="container align-center">
            @if (@option('allow_user_registration') == 'true')
            <div class="row">
                <div class="col-md-3 col-md-offset-3">
                    <a href="{{ URL::to('/login') }}" class="btn btn-lg btn-primary btn-block">{{ @translate('Sign In') }}</a>
                </div>
                <div class="col-md-3">
                    <a href="{{ URL::to('/register') }}" class="btn btn-lg btn-primary btn-block">{{ @translate('Sign Up') }}</a>
                </div>
            </div><!-- .row -->
            @else
            <a href="{{ URL::to('/login') }}" class="btn btn-lg btn-primary">{{ @translate('Sign In') }}</a>
            @endif
        </div><!-- .container -->
    </div><!-- .kotakin-container -->
@stop