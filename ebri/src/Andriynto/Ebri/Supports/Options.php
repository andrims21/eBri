<?php namespace Andriynto\Ebri\Supports;
 

class Option
{

    /**
     * The options.
     *
     * @var Array
     */
    protected $options;

	/**
     * Create a new instance.
     *
     * @param  Array $options
     * @return void
     */
    public function __construct(Array $options = array())
    {
        $this->options = array();

        if ( ! empty($options)) {
            foreach ($options as $item) {
                $this->options[$item['key']] = $item['value'];
            }
        }
    }

    /**
     * Get an attribute.
     *
     * @param  string  $key
     * @return mixed
     */
    public function getAttribute($key)
    {
        if (isset($this->options[$key])) {
            return $this->options[$key];
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
        $this->options[$key] = $value;
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
