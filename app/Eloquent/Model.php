<?php

namespace App\Eloquent;

use Illuminate\Database\Eloquent\Model as BaseModel;

class Model extends BaseModel
{
    public static function createMany(array $elements)
    {
        if (!count($elements)) {
            return new Collection();
        }
        $models = [];
        foreach ($elements as $attributes) {
            $models[] = static::create($attributes);
        }

        return new Collection($models);
    }
}