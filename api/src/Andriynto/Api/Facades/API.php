<?php
namespace Andriynto\Api\Facades;



use Illuminate\Support\Facades\Facade;

/**
 * @see \Andriynto\Api\Api
 */
class API extends Facade
{

	/**
     * Get the registered name of the component.
     *
     * @return string
     */
    protected static function getFacadeAccessor() { return 'api'; }

}
