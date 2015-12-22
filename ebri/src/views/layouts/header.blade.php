<div class="navbar navbar-fixed-top ebri-nav" role="navigation">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".ebri-navbar-collapse">
                <span class="sr-only">{{ @translate('Toggle navigation') }}</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="{{ URL::to('/dashboard') }}"><img src="{{ URL::asset('/packages/sule/ebri/images/ebri-logo-xxsmall.png') }}" alt="{{ @option('brand') }}"></a>
        </div>

        <div class="collapse navbar-collapse ebri-navbar-collapse">
            <ul id="app-nav" class="nav navbar-nav">
                <li><a href="{{ URL::to('/dashboard') }}" class="js-act"><i class="glyphicon glyphicon-th-large"></i> {{ @translate('Dashboard') }}</a></li>
                @if (@hasPermission('link.view') or @hasPermission('link.create') or @hasPermission('link.update') or @hasPermission('link.delete'))
                <li><a href="{{ URL::to('/links') }}" class="js-act"><i class="glyphicon glyphicon-link"></i> {{ @translate('Links') }}</a></li>
                @endif
                @if (@hasPermission('setting.create') or @hasPermission('setting.update') or @hasPermission('setting.delete'))
                <li><a href="{{ URL::to('/archives') }}" class="js-act"><i class="glyphicon glyphicon-briefcase"></i> {{ @translate('Archives') }}</a></li>
                <li class="dropdown">
                    <a href="{{ URL::to('/settings') }}" class="dropdown-toggle" data-toggle="dropdown"><i class="glyphicon glyphicon-cog"></i> {{ @translate('Settings') }} <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="{{ URL::to('/settings') }}"><i class="glyphicon glyphicon-globe"></i> {{ @translate('General') }}</a></li>
                        <li><a href="{{ URL::to('/settings/users') }}"><i class="glyphicon glyphicon-user"></i> {{ @translate('Users') }}</a></li>
                        <li><a href="{{ URL::to('/settings/groups') }}"><i class="glyphicon glyphicon-th"></i> {{ @translate('Groups') }}</a></li>
                        <li><a href="{{ URL::to('/settings/api') }}"><i class="glyphicon glyphicon-flash"></i> {{ @translate('API Access') }}</a></li>
                        <li class="divider visible-lg visible-md visible-xs"></li>
                        <li class="hidden-sm hidden-xs"><a href="{{ URL::to('/settings/editor') }}"><i class="glyphicon glyphicon-adjust"></i> {{ @translate('Template Editor') }}</a></li>
                    </ul>
                </li>
                @else
                @if (@hasPermission('profile.update'))
                    <li><a href="#profile-modal" data-toggle="modal"><i class="glyphicon glyphicon-user"></i> {{ @translate('Profile') }}</a></li>
                @endif
                @endif
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li><a href="{{ URL::to('/logout') }}" class="js-act"><i class="glyphicon glyphicon-log-out"></i> {{ @translate('Logout') }}</a></li>
            </ul>
        </div><!-- .navbar-collapse -->
    </div><!-- .container -->
</div><!-- .navbar -->