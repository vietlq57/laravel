<?php

namespace App\Models;

use App\Presenters\UserPresenter;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laracasts\Presenter\PresentableTrait;
use Zizaco\Entrust\Traits\EntrustUserTrait;

/**
 * App\Models\User
 */
class User extends Authenticatable
{
    use EntrustUserTrait;
    use PresentableTrait;

    protected $presenter = UserPresenter::class;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'facebookClientID', 'facebookClientSecret',
        'googleClientID', 'googleClientSecret', 'twitterClientID', 'twitterClientSecret',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $appends = [
        'gravatar'
    ];

    public static function getCount($status = null)
    {
        if($status == null){
            return User::count();

        }
        else{
            return User::where('status', $status)->count();
        }
    }

    public function getGravatarAttribute($size= 80, $d = 'mm')
    {
        if($this->avatar === 'default.png'){
            $url = 'https://www.gravatar.com/avatar/' . md5( strtolower( trim( $this->email ) ) ) . '?d='.$d.'&s='. $size;

        }else{
            $url = asset('avatar/'.$this->avatar);
        }

        return $url;
    }

}
