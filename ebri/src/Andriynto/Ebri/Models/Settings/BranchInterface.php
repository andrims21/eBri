<?php namespace Andriynto\Ebri\Models\Settings;

Interface BranchInterface
{
    public function getTable();

    /**
    * Return the option's ID
    *
    * @return mixed
    */
    public function getId();

    public function save(array $options = array());

    /**
     * Delete the option
     *
     * @return bool
    */
    public function delete();
}