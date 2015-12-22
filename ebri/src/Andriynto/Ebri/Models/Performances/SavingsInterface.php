<?php namespace Andriynto\Ebri\Models\Performances;

interface SavingsInterface
{

    /**
     * Returns the user savings's table name.
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
     * get date availabe report Savings.
     *
     * @return bool
     */
    public function AchievmentsDate($this_month, $current_month);

}
