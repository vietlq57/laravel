<?php

namespace App\Http\Controllers;

use App\Classes\Reply;
use App\Http\Requests\User\DeleteRequest;
use App\Http\Requests\User\ExportCsvRequest;
use App\Http\Requests\User\StoreRequest;
use App\Http\Requests\User\UpdateRequest;
use App\Models\User;
use App\Role;
use Carbon\Carbon;
use Datatables;
use DB;
use Excel;
use Hash;
use Illuminate\Http\Request;
use Storage;
use View;

class UserController extends UserBaseController
{
     /**
	 * UserController constructor.
	 */

    public function __construct()
    {
        parent::__construct();
        $this->pageTitle = 'Users';
    }

    /**
     * @return \Illuminate\Contracts\View\View
     */
    public function index()
    {
        return View::make('admin.users.index', $this->data);
    }

     /**
	 * @return mixed
	 */
    public function getUsersList()
    {
        $users = User::select('id', 'avatar', 'name', 'email', 'gender', 'status')->where('id', '!=', $this->user->id);

        $data = Datatables::of($users)
            ->addColumn(
                'roles',
                function($row) {
                    $ul = '<ul>';

                    foreach ($row->roles as $role) {
                        $ul .= '<li>'.$role->display_name.'</li>';
                    }

                    $ul .= '</ul>';
                    return $ul;
                }
            )
            ->addColumn(
                'action',
                function($row) {
                     // Edit Button
                     $class = $this->global->theme_folder == 'admin-lte' ? 'bg-' : '';
                     $string = '<a style="margin: 1px;" href="javascript:;" onclick="editModal('.$row->id.')" class="btn btn-sm btn-info '.$class.'purple"><i class="fa fa-edit"></i> Edit</a> ';
                     // Delete Button
                     $string .= '<a style="margin: 1px;" href="javascript:;" onclick="deleteAlert('.$row->id.',\''.addslashes($row->name).'\')"  class="btn btn-sm btn-danger '.$class.'red"><i class="fa fa-trash"></i> Delete</a>';

                     // Role Button
                     $string .= '<a style="margin: 1px;" href="javascript:;" onclick="roleModal('.$row->id.')"  class="btn btn-sm btn-success '.$class.'blue"><i class="fa fa-key"></i> Role</a>';
                     return $string;
                }
            )
            ->editColumn(
                'status',
                function ($row) {
                    $color = ['active' => 'success', 'inactive' => 'danger'];
                    return "<span class='label label-sm label-".$color[$row->status]."'>".
                    $row->status. '</span>';
                }
            )
            ->editColumn(
                'gender',
                function ($row) {
                    $color = ['male' => 'aqua-active label-info', 'female' => 'pink label-primary'];


                    if($this->global->theme_folder == 'metronic' ){
                        $color = ['male' => 'blue', 'female' => 'female'];
                    }

                    return "<span id='status".$row->id."' class='label bg-".$color[$row->gender].' disabled '.
                    "color-palette'> <i class='fa fa-".$row->gender."'></i> " .
                    $row->gender. '</span>';
                }
            )
            ->editColumn(
                'avatar',
                function ($row) {
                    return '<img height="100px" src=\''.$row->getGravatarAttribute().'\'>';
                }
             )
            ->rawColumns(['roles', 'status', 'gender', 'avatar', 'action'])
            ->make(true);
        return $data;

    }

     /**
	 * @return \Illuminate\Contracts\View\View
	 */
    public function create()
    {
        $this->icon = 'plus';
        $user = new User();
        //$this->fields = $user->getCustomFieldGroupsWithFields()->fields;

        return View::make('admin.users.create-edit', $this->data);
    }

    /**
     * @param StoreRequest $request
     * @return array
     */
    public function store(StoreRequest $request)
    {
        DB::beginTransaction();

        $user = new User();
        $user->name  = $request->get('name');
        $user->email = $request->get('email');
        $user->dob   = Carbon::parse($request->get('dob'))->format('Y-m-d');
        $user->gender   = $request->get('gender');
        $user->password = Hash::make($request->get('password'));

        if ($request->image) {
            $fileName = $this->generateNewFileName($request->image->getClientOriginalName());
            Storage::disk('avatar')->put($fileName, fopen($request->image, 'r'));
            $user->avatar = $fileName;
        }

        $user->save();

        // To add custom fields data
        /*if($request->get('custom_fields_data')){
            $user->updateCustomFieldData($request->get('custom_fields_data'));
        }*/

        DB::commit();

        return Reply::success('Created Successfully');

    }

     /**
	 * @param $id
	 * @return \Illuminate\Contracts\View\View
	 */
    public function edit($id)
    {
        $this->iconEdit = 'pencil';
        $this->editUser = User::find($id);

        // Call the same create view for edit
        return $this->create();
    }

    /**
     * @param UpdateRequest $request
     * @param $id
     * @return array
     */
    public function update(UpdateRequest $request,$id)
    {
        DB::beginTransaction();

        $user         = User::find($id);
        $user->name   = $request->get('name');
        $user->email  = $request->get('email');
        $user->status = $request->get('status');
        $user->dob    = Carbon::parse($request->get('dob'))->format('Y-m-d');
        $user->gender = $request->get('gender');

        if($request->password){
            $user->password = Hash::make($request->password);
        }

        if ($request->image) {
            $fileName = $this->generateNewFileName($request->image->getClientOriginalName());
            Storage::disk('avatar')->put($fileName, fopen($request->image, 'r'));
            $user->avatar = $fileName;
        }

        $user->save();

        /*if($request->get('custom_fields_data')){
            // To add custom fields data
            $user->updateCustomFieldData($request->get('custom_fields_data'));
        }*/

        DB::commit();

        return Reply::success('Updated Successfully');

    }

    /**
     * @return \Illuminate\Contracts\View\View
     */
    public function getRoleModal($id)
    {
        $this->iconEdit = 'pencil';
        $this->roles = Role::all();
        $user = User::find($id);
        $this->user = $user;
        $this->assignedRoles = $user->roles->pluck('id')->toArray();
        return \View::make('admin.users.role-modal', $this->data);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Contracts\View\View
     */
    public function postUpdateRole(Request $request)
    {
        $user = User::find($request->get('id'));
        $roleArray = array_values($request->role);

        $roles = Role::whereIn('id', $roleArray)->get();
        $user->detachRoles();

        foreach($roles as $role) {
            $user->attachRole($role);
        }

        return Reply::success('Updated Successfully');
    }

    /**
     * @param DeleteRequest $request
     * @param $id
     * @return array
     */
    public function destroy(DeleteRequest $request, $id)
    {
        User::destroy($id);
        return Reply::success('Deleted Successfully');
    }

    public function generateNewFileName($currentFileName)
    {

        $ext     = strtolower(\File::extension($currentFileName));
        $newName = md5(microtime());

        return $newName . '.' . $ext;
    }

}
