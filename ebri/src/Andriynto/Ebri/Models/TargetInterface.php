<?php namespace Andriynto\Ebri\Models;

interface TargetInterface
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

     /**
     * Get Product RKA
     *
     * @return array
     */
     public function ProductOnTarget();

     /**
     * Get branch on product Target
     *
     * @return array
     */
     public function BranchOfficeOnTarget();

     /**
     * Get TargetRitel
     *
     * @return array
     */
     public function getTargetRitel();

}
