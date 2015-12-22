<?php namespace Andriynto\Ebri\Templates;

use Illuminate\Database\Eloquent\Model;

abstract class Template
{

    /**
     * The data.
     *
     * @var Array
     */
    protected $data;

    /**
     * Create a new instance.
     *
     * @param  Model $data
     * @return void
     */
    public function __construct(Model $data)
    {
        $this->data = $data->toArray();
    }

    /**
     * Get an attribute.
     *
     * @param  string  $key
     * @return mixed
     */
    public function getAttribute($key)
    {
        if (isset($this->data[$key])) {
            return $this->data[$key];
        }

        return '';
    }

    /**
     * Set a given attribute.
     *
     * @param  string  $key
     * @param  mixed   $value
     * @return void
     */
    public function setAttribute($key, $value)
    {
        $this->data[$key] = $value;
    }

    /**
     * Dynamically retrieve attributes on the template.
     *
     * @param  string  $key
     * @return mixed
     */
    public function __get($key)
    {
        return $this->getAttribute($key);
    }

    /**
     * Dynamically set attributes on the model.
     *
     * @param  string  $key
     * @param  mixed   $value
     * @return void
     */
    public function __set($key, $value)
    {
        $this->setAttribute($key, $value);
    }

}