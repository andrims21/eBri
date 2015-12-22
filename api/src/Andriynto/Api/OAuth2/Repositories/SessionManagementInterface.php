<?php
namespace Andriynto\Api\OAuth2\Repositories;

interface SessionManagementInterface
{
    public function deleteExpired();
}
