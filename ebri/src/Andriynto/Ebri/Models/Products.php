<?php namespace Andriynto\Ebri\Models;

use Illuminate\Database\Eloquent\Model;
use Andriynto\Ebri\Models\ProductsInterface;

class Products extends Model implements ProductsInterface
{

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'product_of_savings';

	/**
     * The attributes that aren't mass assignable.
     *
     * @var array
     */
    protected $guarded = array();

    /**
     * Returns the option's table name.
     *
     * @return string
     */
    public function getTable()
    {
        return $this->table;
    }

    /**
     * Returns the option's ID.
     *
     * @return mixed
     */
    public function getId()
    {
        return $this->getKey();
    }

    /**
     * Saves the option.
     *
     * @param  array  $options
     * @return bool
     */
    public function save(array $options = array())
    {
        return parent::save();
    }

    /**
     * Delete the option.
     *
     * @return bool
     */
    public function delete()
    {
        return parent::delete();
    }

}