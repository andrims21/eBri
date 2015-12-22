@extends('ebri::layouts.master')

@section('content')
    <div class="ebri-bigboard ebri-formholder">
        <div class="ebri-container">
            <h1>
                <a href="{{ URL::to('/') }}">
                    <img id="account-logo" src="{{ URL::asset('/packages/andriynto/ebri/images/ebri-logo-big.png') }}" alt="{{ @option('brand') }}" class="hide">
                    <img id="account-loading-gif" src="{{ URL::asset('/packages/andriynto/ebri/images/ajax-loader.gif') }}" alt="{{ @option('brand') }}">
                    <div id="account-loading-css" class="spinner spinner-white hide">
                        <div class="double-bounce1"></div>
                        <div class="double-bounce2"></div>
                    </div>
                </a>
            </h1>

            <div id="ebri-user-identify" class="ebri-user-identify"></div>

            <script id="login-template" type="text/html">
            <form id="login-form" method="post" class="ebri-form" role="form">
                <div class="ebri-form-heading">
                    <h2>{{ @translate('Please Sign In') }}</h2>
                </div>
                <fieldset>

                    <% if (isError) { %>
                    <div class="alert alert-danger align-center"><%- errorMessage %></div>
                    <% } %>

                    <div class="row">
                        <div class="col-md-6">
                            <label class="sr-only" for="logEmail">{{ @translate('Email Address') }}</label>
                            <div class="form-group input-group">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
                                <input class="form-control" id="logEmail" name="email" type="email" placeholder="{{ @translate('Email address') }}" value="<%- email %>">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <label class="sr-only" for="logPass">{{ @translate('Password') }}</label>
                            <div class="form-group input-group">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                                <input class="form-control" id="logPass" name="password" type="password" placeholder="{{ @translate('Password') }}">
                            </div>
                        </div>
                    </div><!-- .row -->

                    <div class="ebri-form-confirm clearfix">
                        <div class="ebri-offset-right">
                            <a href="{{ URL::to('/forgot') }}" class="js-act">{{ @translate('forgot password?') }}</a>
                        </div>
                    </div><!-- .ebri-form-confirm -->

                    @if (@option('allow_user_registration') == 'true')
                    <div class="clearfix">
                        <div class="ebri-offset-left">
                            <a href="{{ URL::to('/register') }}" class="btn btn-lg btn-primary btn-block js-act">{{ @translate('Sign up') }}</a>
                        </div>
                        <div class="ebri-offset-right">
                            <button class="btn btn-lg btn-success btn-block" type="submit" data-loading-text="{{ @translate('Sign in ...') }}">{{ @translate('Sign in') }}</button>
                        </div>
                    </div>
                    @else
                    <button class="btn btn-lg btn-primary btn-block" type="submit" data-loading-text="{{ @translate('Sign in ...') }}">{{ @translate('Sign in') }}</button>
                    @endif

                </fieldset>
            </form>
            </script>

            <script id="register-template" type="text/html">
            <form id="register-form" method="post" class="ebri-form" role="form">
                <div class="ebri-form-heading">
                    <h2>{{ @translate('Sign Up') }}</h2>
                </div>
                <fieldset>

                    <% if (isError) { %>
                    <div class="alert alert-danger align-center"><%- errorMessage %></div>
                    <% } %>

                    <div class="row">
                        <div class="col-md-12">
                            <label class="sr-only" for="regEmail">{{ @translate('Email Address') }}</label>
                            <div class="form-group input-group">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
                                <input type="email" class="form-control" id="regEmail" name="email" value="<%- email %>" placeholder="{{ @translate('Email address') }}">
                            </div>
                        </div>
                    </div><!-- .row -->
                    <div class="row">
                        <div class="col-md-6">
                            <label class="sr-only" for="regPass1">{{ @translate('Password') }}</label>
                            <div class="form-group input-group">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                                <input type="password" class="form-control" id="regPass1" name="password" placeholder="{{ @translate('Password') }}">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <label class="sr-only" for="regPass2">{{ @translate('Confirm Password') }}</label>
                            <div class="form-group input-group">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                                <input type="password" class="form-control" id="regPass2" name="confirm_password" placeholder="{{ @translate('Confirm Password') }}">
                            </div>
                        </div>
                    </div><!-- .row -->
                    
                    <button class="btn btn-lg btn-primary btn-block" type="submit" data-loading-text="{{ @translate('Registering ...') }}">{{ @translate('Sign up') }}</button>

                </fieldset>
            </form>
            </script>

            <script id="register-success-template" type="text/html">
            <form method="post" class="ebri-form" role="form">
                <div class="ebri-form-heading">
                    <h2>{{ @translate('Account created') }}</h2>
                </div>
                <div class="alert alert-info align-center">{{ @translate('A instruction to activate your account has been sent to your email.') }}</div>
            </form>
            </script>

            <script id="forgot-template" type="text/html">
            <form id="forgot-form" method="post" class="ebri-form" role="form">
                <div class="ebri-form-heading">
                    <h2>{{ @translate('Please enter your valid email address') }}</h2>
                </div>
                <fieldset>

                    <% if (isError) { %>
                    <div class="alert alert-danger align-center"><%- errorMessage %></div>
                    <% } %>

                    <div class="row">
                        <div class="col-md-12">
                            <label class="sr-only" for="resetEmail">{{ @translate('Email Address') }}</label>
                            <div class="form-group input-group">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
                                <input type="email" class="form-control" id="resetEmail" name="email" value="<%- email %>" placeholder="{{ @translate('Email address') }}">
                            </div>
                        </div>
                    </div><!-- .row -->

                    <button class="btn btn-lg btn-primary btn-block" type="submit" data-loading-text="{{ @translate('Requesting ...') }}">{{ @translate('Reset password') }}</button>

                </fieldset>
            </form>
            </script>

            <script id="forgot-sent-template" type="text/html">
            <form method="post" class="ebri-form" role="form">
                <div class="ebri-form-heading">
                    <h2>{{ @translate('Password reset sent') }}</h2>
                </div>
                <div class="alert alert-info align-center">{{ @translate('A instruction to reset password has been sent to your email.') }}</div>
            </form>
            </script>

            <script id="recover-template" type="text/html">
            <form id="recover-form" method="post" class="ebri-form" role="form">
                <div class="ebri-form-heading">
                    <h2>{{ @translate('Change your password') }}</h2>
                </div>
                <fieldset>

                    <% if (isError) { %>
                    <div class="alert alert-danger align-center"><%- errorMessage %></div>
                    <% } %>

                    <div class="row">
                        <div class="col-md-12">
                            <label class="sr-only" for="recEmail">{{ @translate('Email Address') }}</label>
                            <div class="form-group input-group">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
                                <input type="email" class="form-control" id="recEmail" name="email" value="<%- email %>" placeholder="{{ @translate('Email address') }}">
                            </div>
                        </div>
                    </div><!-- .row -->
                    <div class="row">
                        <div class="col-md-6">
                            <label class="sr-only" for="recPass1">{{ @translate('Password') }}</label>
                            <div class="form-group input-group">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                                <input type="password" class="form-control" id="recPass1" name="password" placeholder="{{ @translate('New Password') }}">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <label class="sr-only" for="recPass2">{{ @translate('Confirm Password') }}</label>
                            <div class="form-group input-group">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                                <input type="password" class="form-control" id="recPass2" name="confirm_password" placeholder="{{ @translate('Confirm Password') }}">
                            </div>
                        </div>
                    </div><!-- .row -->
                    
                    <button class="btn btn-lg btn-primary btn-block" type="submit" data-loading-text="{{ @translate('Changing ...') }}">{{ @translate('Change Password') }}</button>

                </fieldset>
            </form>
            </script>

            <script id="activation-template" type="text/html">
            <form id="activation-form" method="post" class="ebri-form" role="form">
                <div class="ebri-form-heading">
                    <h2>{{ @translate('Complete your information') }}</h2>
                </div>
                <fieldset>

                    <% if (isError) { %>
                    <div class="alert alert-danger align-center"><%- errorMessage %></div>
                    <% } %>

                    <div class="row">
                        <div class="col-md-6">
                            <label class="sr-only" for="actEmail">{{ @translate('Email Address') }}</label>
                            <div class="form-group input-group">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
                                <input type="email" class="form-control" id="actEmail" name="email" value="<%- email %>" placeholder="{{ @translate('Email address') }}">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <label class="sr-only" for="actUsername">{{ @translate('Username') }}</label>
                            <div class="form-group input-group">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                                <input type="text" class="form-control" id="actUsername" name="username" placeholder="{{ @translate('Username') }}">
                            </div>
                        </div>
                    </div><!-- .row -->
                    <div class="row">
                        <div class="col-md-6">
                            <label class="sr-only" for="actFirstname">{{ @translate('First name') }}</label>
                            <div class="form-group input-group">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-info-sign"></i></span>
                                <input type="text" class="form-control" id="actFirstname" name="first_name" value="<%- first_name %>" placeholder="{{ @translate('First name') }}">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <label class="sr-only" for="actLastname">{{ @translate('Last name') }}</label>
                            <div class="form-group input-group">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-info-sign"></i></span>
                                <input type="text" class="form-control" id="actLastname" name="last_name" value="<%- last_name %>" placeholder="{{ @translate('Last name') }}">
                            </div>
                        </div>
                    </div><!-- .row -->
                    
                    <button class="btn btn-lg btn-primary btn-block" type="submit" data-loading-text="{{ @translate('Activating ...') }}">{{ @translate('Activate') }}</button>

                </fieldset>
            </form>
            </script>
        </div>
    </div>
@stop

@section('footer_assets')
<script type="text/javascript">
    require([baseUrl + '/packages/andriynto/ebri/js/main.js'], function() {
        require(['app'], function(App){
            App.initialize();

            require(['account'], function(App){
                App.initialize();
            });
        });
    });
</script>
@stop