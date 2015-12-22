<?php
namespace Andriynto\Ebri\Apis\v1\Templates;



class User extends Template
{

    /**
     * The avilable mime types.
     *
     * @var array
     */
    protected $_availableMimeTypes = array();

    /**
     * Set the available mime types.
     *
     * @param array $mimeTypes
     * @return void
     */
    public function setAvailableMimeTypes(Array $mimeTypes)
    {
        $this->_availableMimeTypes = $mimeTypes;
    }

    /**
     * Prepare the data to retreive.
     *
     * @return void
     */
    public function prepareData()
    {
        $metadatas = $this->getModel()->hasMany('Andriynto\ebri\Models\UserMeta')->getResults();

        $this->setAttribute('email');
        $this->setAttribute('last_login');
        $this->setAttribute('is_activated', null, $this->getModel()->activated);
        $this->setAttribute('created_at', 'registered_at');
        $this->setAttribute('updated_at');

        // Get the user groups
        $groupNames = array();
        $groups = $this->getModel()->getGroups();

        if ( ! $groups->isEmpty()) {
            foreach ($groups as $group) {
                $groupNames[] = $group->name;
            }
        }

        unset($groups);

        $this->setAttribute('groups', null, $groupNames);

        unset($groupNames);

        if ( ! $metadatas->isEmpty()) {
            foreach ($metadatas as $item) {
                
                switch ($item->key) {
                    case 'unique_id':
                        $this->setAttribute('id', null, $item->value);
                        break;

                    case 'allowed_file_types':
                        $availableMimeTypes = $this->getOption('available_mime_types');

                        $mimeTypes = array();
                        $extensions = explode(',', $item->value);
                        
                        if ( ! empty($extensions)) {
                            foreach ($extensions as $extension) {
                                if (isset($availableMimeTypes[$extension])) {
                                    $mimeTypes[] = $availableMimeTypes[$extension];
                                }
                            }
                        }

                        unset($extensions);
                        unset($availableMimeTypes);

                        $this->setAttribute('allowed_mime_types', null, implode(',', $mimeTypes));
                        $this->setAttribute('allowed_file_types', null, $item->value);

                        unset($mimeTypes);
                        break;

                    case 'max_upload_size':
                        $this->setAttribute('max_upload_size', null, $this->humanReadableFileSize($item->value));
                        $this->setAttribute('max_upload_bytes', null, $item->value);
                        break;

                    case 'quota':
                        $this->setAttribute('quota_size', null, $this->humanReadableFileSize($item->value));
                        $this->setAttribute('quota_bytes', null, $item->value);
                        break;

                    case 'quota_used':
                        $this->setAttribute('quota_used_size', null, $this->humanReadableFileSize($item->value));
                        $this->setAttribute('quota_used_bytes', null, $item->value);
                        break;
                    
                    default:
                        $this->setAttribute($item->key, null, $item->value);
                        break;
                }
            }

            if (isset($this->quota_bytes)) {
                if ( ! isset($this->quota_used_bytes)) {
                    $this->setAttribute('quota_used_size', null, $this->humanReadableFileSize(0));
                    $this->setAttribute('quota_used_bytes', null, 0);
                }

                if ($this->quota_bytes > $this->quota_used_bytes) {
                    $freeQuota = $this->quota_bytes - $this->quota_used_bytes;
                } else {
                    $freeQuota = 0;
                }

                $this->setAttribute('quota_free_size', null, $this->humanReadableFileSize($freeQuota));
                $this->setAttribute('quota_free_bytes', null, $freeQuota);
            }
        }

        unset($metadatas);
    }

}
