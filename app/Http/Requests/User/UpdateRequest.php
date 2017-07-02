<?php

namespace App\Http\Requests\User;

use App\Http\Requests\CoreRequest;

class UpdateRequest extends CoreRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */

    public function authorize()
    {
        $user = $this->user();
        return $user->can('edit-user');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $mainRules = [
            'email' => 'required|unique:users,email,'.$this->route('user'),
            'name'  => 'required',
            'image' => 'image'
        ];

        return $mainRules;
    }

}
