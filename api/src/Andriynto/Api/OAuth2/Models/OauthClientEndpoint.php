<?php
namespace Andriynto\Api\OAuth2\Models;



use Illuminate\Database\Eloquent\Model;

use Andriynto\Api\OAuth2\Models\OauthClientEndpointInterface;

class OauthClientEndpoint extends Model implements OauthClientEndpointInterface
{

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'oauth_client_endpoints';

	/**
     * The attributes that aren't mass assignable.
     *
     * @var array
     */
    protected $guarded = array();

    /**
     * Returns the OAuth client endpoint's table name.
     *
     * @return string
     */
    public function getTable()
    {
        return $this->table;
    }

    /**
     * Returns the OAuth client endpoint's ID.
     *
     * @return mixed
     */
    public function getId()
    {
        return $this->getKey();
    }

    /**
     * Saves the OAuth client endpoint.
     *
     * @param  array  $options
     * @return bool
     */
    public function save(array $options = array())
    {
        return parent::save();
    }

    /**
     * Delete the OAuth client endpoint.
     *
     * @return bool
     */
    public function delete()
    {
        return parent::delete();
    }

}