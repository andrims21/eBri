<?php
namespace Andriynto\Ebri\Templates;

use Illuminate\Database\Eloquent\Model;

class User extends Template
{

    /**
     * Create a new instance.
     *
     * @param  Model $data
     * @return void
     */
    public function __construct(Model $data)
    {
        parent::__construct($data);

        $metas = $data->hasMany('Andriynto\Ebri\Models\UserMeta')->getResults();

        if ( ! $metas->isEmpty()) {
            $metas = $metas->toArray();

            foreach ($metas as $item) {
                $this->setAttribute($item['key'], $item['value']);
            }

            unset($metas);
        }

        unset($metas);
    }

}