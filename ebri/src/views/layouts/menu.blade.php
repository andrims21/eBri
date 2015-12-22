<nav role="navigation" class="navbar-default navbar-static-side">
    <div class="sidebar-collapse">               
        <ul id="sidemenu" class="nav expanded-menu">
            <li class="logo-header">
             <a class="navbar-brand" href="/">
                {{ HTML::image('packages/andriynto/ebri/images/logo.png', 'Logo') }}
             </a>
            </li>
            <li class="nav-header">
                <div class="dropdown profile-element" style="text-align:center;">
                    <span>
                        {{ HTML::image('packages/andriynto/ebri/images/1.jpg', 'users', array('border' => '0', 'width' => '75', 'class' => 'img-circle')) }}
                    </span>
                    
                    <a href="javascript:void(0);">
                        <span class="clear"> 
                            <span class="block m-t-xs"> <strong class="font-bold">Root Admin</strong><br>
                                Last Login : <br>
                                <small>16:04 November 1, 2015</small>               
                            </span> 
                        </span>
                    </a>
                </div>

                <div class="photo-header ">
                    {{ HTML::image('packages/andriynto/ebri/images/1.jpg', 'users', array('border' => '0', 'width' => '50', 'class' => 'img-circle')) }}  
                </div>
            </li> 

            <li>
                <a href="javascript:void(0);" class="expand level-closed">
                    <i class="icon-screen"></i> 
                    <span class="nav-label">Simpanan</span>
                    <span class="fa arrow"></span>    
                </a> 
                
                <ul class="nav nav-second-level collapse">
                    <li>
                       <a href="{{ URL::to('http://ebri.dev/savings/products?code=ritel') }}">
                            <i class="fa fa-tags"></i>
                            Ritel                         
                        </a>
                    </li>
                    <li>
                       <a href="{{ URL::to('http://ebri.dev/savings/products?code=mikro') }}">
                            <i class="fa fa-tags"></i>
                            Mikro                         
                        </a>
                    </li>                         
                    <li>
                        <a href="javascript:void(0);">
                            <i class="fa fa-user"></i>
                            Suppliers                               
                        </a>
                    </li>                           
                    <li>
                        <a href="javascript:void(0);">
                            <i class="fa fa-shopping-cart"></i>
                            Orders                              
                        </a>
                    </li>                           
                    <li>
                        <a href="javascript:void(0);">
                            <i class="fa fa-user"></i>
                            Customers                               
                        </a> 
                    </li>                           
                </ul>
            </li>

            <li>
                <a href="javascript:void(0);" class="expand level-closed">
                    <i class="fa fa-play-circle"></i> 
                    <span class="nav-label">Ajax Application</span>
                    <span class="fa arrow"></span>    
                </a> 

                <ul class="nav nav-second-level collapse">
                    <li>
                        <a href="javascript:void(0);">
                            <i class="fa fa-user"></i>
                            Customers ( Ajax )                              
                        </a> 
                    </li>
                    <li>
                        <a href="javascript:void(0);">
                            <i class=""></i>
                            Categories ( Ajax )                             
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);">
                            <i class="fa fa-users"></i>
                            Employee ( Ajax )                               
                        </a> 
                    </li>
                    <li>
                        <a href="javascript:void(0);">
                            <i class="fa fa-tag"></i>
                            Products ( Ajax )
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);">
                            <i class="fa fa-bar-chart-o"></i>
                            Suppliers ( Ajax )                              
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);">
                            <i class="fa fa-shopping-cart"></i>
                                Orders ( Ajax )                             
                        </a>
                    </li>
                </ul>
            </li>

            <li>
                <a href="javascript:void(0);" class="expand level-closed">
                    <i class="fa fa-gears"></i> 
                    <span class="nav-label">Customization</span>
                    <span class="fa arrow"></span>    
                </a>
                <ul class="nav nav-second-level collapse">
                     <li>
                        <a href="javascript:void(0);">
                            <i class=""></i>
                            Format Rows Via MySQL                               
                        </a> 
                    </li>
                    <li>
                        <a href="javascript:void(0);">
                            <i class=""></i>
                            Format Rows Via Helpers                             
                         </a>                         
                    </li>
                    <li>
                        <a href="javascript:void(0);">
                            <i class=""></i>
                            Simple Master Detail                                
                        </a>                         
                    </li>
                </ul>
            </li>
            <li>
                <a href="javascript:void(0);" class="expand level-closed">
                    <i class="fa  fa-gavel"></i>
                    <span class="nav-label">Free Modules</span>
                    <span class="fa arrow"></span>    
                </a> 

                <ul class="nav nav-second-level collapse">
                    <li>
                        <a href="javascript:void(0);">
                            <i class=""></i>
                            Event Calendar Starter                              
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);">
                            <i class=""></i>
                            My FileManager
                        </a>
                    </li>
                </ul>
             </li>

             <li>
                <a href="javascript:void(0);">
                    <i class="fa fa-shopping-cart"></i>
                    <span class="nav-label">Premium Modules</span>
                    <span class="fa arrow"></span>    
                </a>
            </li>
        </ul>
    </div>
</nav>


