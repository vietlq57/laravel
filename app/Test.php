<?php
namespace App;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Test
 *
 * @package App
 * @property string $title
 */
class Test extends Model
{
    use SoftDeletes;

    protected $fillable = ['user_id', 'result'];
}
