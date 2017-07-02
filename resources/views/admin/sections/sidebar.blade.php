<div class="page-sidebar-wrapper">
    <!-- BEGIN SIDEBAR -->
    <div class="page-sidebar navbar-collapse collapse">
        <ul class="page-sidebar-menu   " data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200">
                <li class="nav-item @if(strpos(\Request::route()->getName(),'dashboard')) active @endif">
                    <a href="{{ route('user.dashboard.index') }}" class="nav-link ">
                        <i class="icon-home"></i>
                        <span class="title">Dashboard</span>
                        <!-- <span class="selected"></span> -->
                    </a>
                </li>
            @permission('view-users')
                <li class="nav-item @if(strpos(\Request::route()->getName(),'users')) active @endif">
                    <a href="{{ route('user.users.index') }}" class="nav-link ">
                        <i class="icon-user"></i>
                        <span class="title">Users</span>
                        <!-- <span class="selected"></span> -->
                    </a>
                </li>
            @endpermission
            @permission(['view-role', 'view-permission'])
                <li class="nav-item @if(strpos(\Request::route()->getName(),'roles') or strpos(\Request::route()->getName(),'permissions')) active @endif">
                    <a href="javascript:;" class="nav-link nav-toggle">
                        <i class="icon-key"></i>
                        <span class="title">Roles & Permissions</span>
                        <span class="arrow"></span>
                    </a>
                    <ul class="sub-menu">
                        @permission('view-role')
                            <li class="nav-item @if(strpos(\Request::route()->getName(),'roles')) active @endif">
                                <a href="{{ route('user.roles.index') }}" class="nav-link ">
                                    <span class="title">Roles</span>
                                </a>
                            </li>
                        @endpermission
                        @permission('view-permission')
                            <li class="nav-item @if(strpos(\Request::route()->getName(),'permissions')) active @endif">
                                <a href="{{ route('user.permissions.index') }}" class="nav-link ">
                                    <span class="title">Permissions</span>
                                </a>
                            </li>
                        @endpermission
                    </ul>
                </li>
            @endpermission
            @permission('view-email-template')
                <li class="nav-item @if(preg_match('/email-templates/',\Request::route()->getName())) active @endif">
                    <a href="{{ route('email-templates.index') }}" class="nav-link ">
                        <i class="icon-envelope"></i>
                        <span class="title">Email Templates</span>
                        <!-- <span class="selected"></span> -->
                    </a>
                </li>
            @endpermission
        </ul>
        <!-- END SIDEBAR MENU -->
    </div>
    <!-- END SIDEBAR -->
</div>