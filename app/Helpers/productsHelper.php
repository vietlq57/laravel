<?php

namespace App\Helpers;

class productsHelper
{
    public static function suggest($type, $limit = 4)
    {
        $data = [];
        switch ($type) {
            case 'purchased':
                $data['preferences_key'] = 'product_purchased';
                $data['limit'] = $limit;
                break;

            case 'categories':
                $data['preferences_key'] = 'product_categories';
                $data['limit'] = $limit;
                $usr_prefe = UserController::getPreferences('', $data['preferences_key']); //look up for user preferences
                if (count($usr_prefe['tags']) == 0) {
                    $data['category'] = ProductsController::getRandCategoryId(); //if there is not info, we get a rand category id
                } else {
                    $data['category'] = $usr_prefe['tags'][mt_rand(0, count($usr_prefe['tags']) - 1)]; //if so, we get a rand user preferences category
                }
                break;

            case 'viewed':
                $data['preferences_key'] = 'product_viewed';
                $data['limit'] = $limit;
                break;

            case 'carousel':
                return ProductsController::getTopRated(0, $limit, false);
                break;

            default:
                $data['limit'] = $limit;
                $data['preferences_key'] = '';
                break;
        }

        $suggest = ProductsController::getSuggestions($data); //suggestion array
        return $suggest;
    }
}