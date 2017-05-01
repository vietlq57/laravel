<?php

namespace App;

use App\Eloquent\Model;

class ActionType extends Model
{
    protected $table = 'action_types';

    public $timestamps = false;

    protected $fillable = [
        'id',
        'source_type',
        'action',
    ];
}
