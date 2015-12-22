<?php namespace Andriynto\Ebri\Facades;



use Illuminate\Support\Facades\Facade;

class Access extends Facade
{

	/**
     * Get the registered name of the component.
     *
     * @return string
     */
    protected static function getFacadeAccessor() { return 'ebri.access'; }

}
