<?php namespace Andriynto\Ebri\Apis\v1\Templates;


use Illuminate\Database\Eloquent\Model;
use DateTime;

abstract class Template
{

    /**
     * The model.
     *
     * @var Model
     */
    protected $model;

    /**
     * The attributes.
     *
     * @var array
     */
    protected $attributes;

    /**
     * The options.
     *
     * @var array
     */
    protected $options;

    /**
     * Create a new instance.
     *
     * @param  Model $model
     * @param  Array $options
     * @return void
     */
    public function __construct(Model $model, Array $options = array())
    {
        $this->model   = $model;
        $this->options = $options;

        $this->prepareData();

        unset($this->model);
    }

    /**
     * Return the model.
     *
     * @return Model
     */
    public function getModel()
    {
        return $this->model;
    }

    /**
     * Return a option.
     *
     * @param  string $key
     * @return mixed
     */
    public function getOption($key)
    {
        if (isset($this->options[$key])) {
            return $this->options[$key];
        }

        return null;
    }

    /**
     * Prepare the data to retreive.
     *
     * @return void
     */
    public function prepareData()
    {}

    /**
     * Return human readable file size.
     *
     * @param  
     * @return string
     */
    public function humanReadableFileSize($size)
    {
        $filesizename = array(' Bytes', ' KB', ' MB', ' GB', ' TB', ' PB', ' EB', ' ZB', ' YB');
        return $size ? round($size/pow(1024, ($i = floor(log($size, 1024)))), 2) . $filesizename[$i] : '0 Bytes';
    }

    /**
     * Return bytes from string size.
     *
     * @param  
     * @return string
     */
    public function getBytes($val)
    {
        $val = trim($val);
        $last = strtolower($val[strlen($val)-1]);
        switch($last) {
            // The 'G' modifier is available since PHP 5.1.0
            case 'g':
                $val *= 1024;
            case 'm':
                $val *= 1024;
            case 'k':
                $val *= 1024;
        }

        return $val;
    }

    /**
     * Get an attribute from the template.
     *
     * @param  string  $key
     * @return mixed
     */
    public function getAttribute($key)
    {
        if (isset($this->$key)) {
            return $this->$key;
        }

        return '';
    }

    /**
     * Set a given attribute on the template from model.
     *
     * @param  string  $key
     * @param  string  $newKey
     * @param  mixed  $value
     * @return void
     */
    public function setAttribute($key, $newKey = null, $value = null)
    {
        if (is_null($value)) {
            $value = $this->model->$key;
        }

        if ($value instanceof DateTime) {
            $value = $value->format('c');
        }

        if (is_numeric($value) 
            and $key != 'id' 
            and substr($value, 0, 1) != '+' 
            and $key != 'chmod_folder') {
            $value = (float) $value;
        }

        if (is_null($newKey)) {
            $this->$key = $value;
        } else {
            $this->$newKey = $value;
        }

        unset($value);
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

}
