<?php
namespace Andriynto\Api\OAuth2\Models;



interface OauthClientInterface
{

    /**
     * Returns the OAuth client's table name.
     *
     * @return string
     */
    public function getTable();

    /**
     * Returns the OAuth client's ID.
     *
     * @return mixed
     */
    public function getId();

    /**
     * Saves the OAuth client.
     *
     * @param  array  $options
     * @return bool
     */
    public function save(array $options = array());

    /**
     * Delete the OAuth client.
     *
     * @return bool
     */
    public function delete();

}
