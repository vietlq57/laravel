@extends('admin.layouts.user')
@section('style')
    <link href="{{ asset('admin/global/plugins/datatables/datatables.min.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('admin/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css') }}" rel="stylesheet" type="text/css" />
    <style>
        .bg-female {
            background: deeppink;
        }

    </style>
@endsection
@section('content')
    <div class="page-content-wrapper">
        <!-- BEGIN CONTENT BODY -->
        <div class="page-content">
            <!-- BEGIN PAGE HEAD-->
            <div class="page-head">
                <!-- BEGIN PAGE TITLE -->
                <!-- END PAGE TITLE -->
            </div>
            <!-- END PAGE HEAD-->
            <!-- BEGIN PAGE BREADCRUMB -->
            <section class="content">
                <div class="row">
                    <div class="col-md-12">
                        <!-- BEGIN EXAMPLE TABLE PORTLET-->
                        <div class="portlet light bordered">
                            <div class="portlet-title">
                                <div class="caption font-dark">
                                    <i class="icon-users"></i>
                                    <span class="caption-subject bold uppercase"> Users </span>
                                </div>
                                <div class="actions">
                                </div>
                            </div>
                            <div class="portlet-body">
                                <div class="table-toolbar">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="btn-group">
                                                <button id="sample_editable_1_new" class="btn  sbold green"  onclick="addModal()" >
                                                    Add New User <i class="fa fa-plus"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <table class="table table-striped table-bordered table-hover table-checkable order-column dataTable no-footer" id="users">
                                    <thead>
                                    <tr>

                                        <th>ID</th>
                                        <th>Avatar</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Gender</th>
                                        <th>Role</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <!-- END EXAMPLE TABLE PORTLET-->
                    </div>
                </div>
            </section>
            <!-- END PAGE BREADCRUMB -->
            <!-- BEGIN PAGE BASE CONTENT -->
            <!-- END PAGE BASE CONTENT -->
        </div>
        <!-- END CONTENT BODY -->
    </div>

    <div id="addEditModal" class="modal fade" tabindex="-1"  data-backdrop="static" role="dialog" aria-labelledby="myModalLabel1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                {{--Content to inserted by ajax data--}}
            </div>
        </div>
    </div>

    @include('admin.include.delete-modal')
@endsection

@section('scripts-footer')
    <!-- DataTables -->
    <script src="{{ asset('admin/global/plugins/datatables/datatables.min.js') }}" type="text/javascript"></script>
    <script src="{{ asset('admin/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.js') }}" type="text/javascript"></script>
    <script type="text/javascript">

        var table = $('#users').dataTable({
            // Internationalisation. For more info refer to http://datatables.net/manual/i18n
            "pagingType": "bootstrap_full_number",

            "bProcessing": true,
            "bServerSide": true,
            "ajax": "{{route('user.get-users')}}",

            "aoColumns": [
                {data: 'id', name: 'id'},
                {data: 'avatar', name: 'avatar'},
                {data: 'name', name: 'name'},
                {data: 'email', name: 'email'},
                {data: 'gender', name: 'gender'},
                {data: 'roles', name: 'roles',searchable: false, orderable: false },
                {data: 'status', name: 'status'},
                {data: 'action', name: 'action', orderable: false, searchable: false}
            ],
            "lengthMenu": [
                [10, 15, 20, -1],
                [10, 15, 20, "All"] // change per page values here
            ],
            "order": [
                [0, "desc"]
            ]
        });

        // Show Delete Modal
        function deleteAlert(id, name) {

            $('#deleteModal').modal('show');

            var confirmMsg = 'Are you sure you want to delete <strong>:name</strong>? This action cannot be undone.';
            confirmMsg = confirmMsg.replace(":name", name);

            $("#deleteModal").find('#info').html(confirmMsg);

            $('#deleteModal').find("#delete").off().click(function () {
                var url = "{{ route('user.users.destroy',':id') }}";
                url = url.replace(':id', id);

                var token = "{{ csrf_token() }}";

                $.easyAjax({
                    type: 'DELETE',
                    url: url,
                    data: {'_token': token},
                    container: "#deleteModal",
                    success: function (response) {
                        if (response.status == "success") {
                            $('#deleteModal').modal('hide');
                            table._fnDraw();
                        }
                    }
                });

            });
        }


        // Show Add modal
        function addModal() {
            $.ajaxModal('#addEditModal','{{route('user.users.create')}}');
        }
        // Show Role modal
        function roleModal(id) {
            var url  ="{{route('user.role-modal',':id')}}";
            url      = url.replace(':id',id);
            $.ajaxModal('#addEditModal',url);
        }

        // Assign role to user
        function assignRole($id) {

            var url = '{{route('user.update-role')}}';

            $.easyAjax({
                type: 'POST',
                url: url,
                data: $('#assign-role').serialize(),
                container: "#assign-role",
                success: function(response) {
                    if (response.status == "success") {
                        $('#addEditModal').modal('hide');
                        table._fnDraw();
                    }
                }
            });
        }
        // Show Edit Modal
        function editModal(id) {
            var url  ="{{route('user.users.edit',':id')}}";
            url      = url.replace(':id',id);
            $.ajaxModal('#addEditModal',url);
        }

        // Update User Function ajax request
        function addEditUser(id) {
            if(typeof id!='undefined'){
                var url  ="{{route('user.users.update',':id')}}";
                url      = url.replace(':id',id);
            }else{
                url = "{{ route('user.users.store') }}";

            }

            $.easyAjax({
                type: 'POST',
                url: url,
                data: $('#add-edit-form').serialize(),
                container: "#add-edit-form",
                file:true,
                success: function(response) {
                    if (response.status == "success") {
                        $('#addEditModal').modal('hide');
                        table._fnDraw();
                    }
                }
            });
        }


    </script>
@endsection