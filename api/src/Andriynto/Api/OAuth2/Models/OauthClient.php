<?php
namespace Andriynto\Api\OAuth2\Models;



use Illuminate\Database\Eloquent\Model;

use Andriynto\Api\OAuth2\Models\OauthClientInterface;

class OauthClient extends Model implements OauthClientInterface
{

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'oauth_clients';

	/**
     * The attributes that aren't mass assignable.
     *
     * @var array
     */
    protected $guarded = array();

    /**
     * Returns the OAuth client's table name.
     *
     * @return string
     */
    public function getTable()
    {
        return $this->table;
    }

    /**
     * Returns the OAuth client's ID.
     *
     * @return mixed
     */
    public function getId()
    {
        return $this->getKey();
    }

    /**
     * Saves the OAuth client.
     *
     * @param  array  $options
     * @return bool
     */
    public function save(array $options = array())
    {
        return parent::save();
    }

    /**
     * Delete the OAuth client.
     *
     * @return bool
     */
    public function delete()
    {
        return parent::delete();
    }

    /**
     * Returns the relationship between client and endpoint.
     *
     * @return Illuminate\Database\Eloquent\Relations\hasOne
     */
    public function endpoint()
    {
        return $this->hasOne('Andriynto\Api\OAuth2\Models\OauthClientEndpoint', 'client_id');
    }

}