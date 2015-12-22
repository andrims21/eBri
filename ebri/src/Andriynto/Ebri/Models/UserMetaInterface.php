<?php namespace Andriynto\Ebri\Models;

interface UserMetaInterface
{

    /**
     * Returns the user metadata's table name.
     *
     * @return string
     */
    public function getTable();

    /**
     * Returns the user metadata's ID.
     *
     * @return mixed
     */
    public function getId();

    /**
     * Saves the user metadata.
     *
     * @param  array  $options
     * @return bool
     */
    public function save(array $options = array());

    /**
     * Delete the user metadata.
     *
     * @return bool
     */
    public function delete();

}
