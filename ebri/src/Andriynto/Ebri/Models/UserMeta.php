<?php namespace Andriynto\Ebri\Models;

use Illuminate\Database\Eloquent\Model;
use Andriynto\Ebri\Models\UserMetaInterface;

class UserMeta extends Model implements UserMetaInterface
{

	/**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'users_metadata';

    /**
     * The attributes that aren't mass assignable.
     *
     * @var array
     */
    protected $guarded = array();

    /**
     * Returns the user metadata's table name.
     *
     * @return string
     */
    public function getTable()
    {
        return $this->table;
    }

    /**
     * Returns the user metadata's ID.
     *
     * @return mixed
     */
    public function getId()
    {
        return $this->getKey();
    }

    /**
     * Saves the user metadata.
     *
     * @param  array  $options
     * @return bool
     */
    public function save(array $options = array())
    {
        return parent::save();
    }

    /**
     * Delete the user metadata.
     *
     * @return bool
     */
    public function delete()
    {
        return parent::delete();
    }

    /**
     * Find meta by it's user_id and key.
     *
     * @param  int $userId
     * @param  string $key
     * @return UserMeta|null
     */
    public function findByKey($userId, $key)
    {
        return $this->newQuery()->where('user_id', '=', $userId)
                                ->where('key', '=', $key)
                                ->first();
    }

    /**
     * Check is unique_id exist.
     *
     * @param  integer $uniqueId
     * @return bool|int
     */
    public function isUniqueIdExist($uniqueId)
    {
        $meta = $this->newQuery()->where('key', '=', 'unique_id')
                                ->where('value', '=', $uniqueId)
                                ->first();

        if (is_object($meta)) {
            return $meta->user_id;
        }

        return false;
    }

    /**
     * Check is username exist.
     *
     * @param  string $username
     * @return bool|int
     */
    public function isUsernameExist($username)
    {
        $meta = $this->newQuery()->where('key', '=', 'username')
                                ->where('value', '=', $username)
                                ->first();

        if (is_object($meta)) {
            return $meta->user_id;
        }

        return false;
    }

}
