<?php
namespace Andriynto\Ebri\Apis\v1;

use Andriynto\Api\Api as ApiServer;

use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\File as FileFacade;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Response;

use Symfony\Component\HttpFoundation\File\File as HttpFile;
use Symfony\Component\HttpFoundation\File\UploadedFile;

use Illuminate\Filesystem\FileNotFoundException;
use Symfony\Component\HttpFoundation\File\Exception\FileException;


use Cartalyst\Sentry\Sentry;
use Mews\Purifier\Purifier;
use Maatwebsite\Excel\Facades\Excel;

use Andriynto\Ebri\Supports\Template as TemplateSupport;
use Andriynto\Ebri\Models\Target;

class File
{
	/**
     * The Api Server.
     *
     * @var Api
     */
    protected $apiServer;

    /**
     * The Sentry.
     *
     * @var Sentry
     */
    protected $sentry;

    /**
     * The current User.
     *
     * @var User
     */
    protected $user;

    /**
     * The Option.
     *
     * @var Option
     */
    protected $option;


    /**
     * The Template.
     *
     * @var Template
     */
    protected $template;

    /**
     * The Locale.
     *
     * @var Locale
     */
    protected $locale;

    /**
     * The Current User.
     *
     * @var User
     */
    protected $userMetas;


    /**
     * Create a new instance.
     *
     * @param  ApiServer $apiServer
     * @param  Sentry $sentry
     * @return void
     */
    public function __construct(ApiServer $apiServer, Sentry $sentry)
    {
        $this->apiServer = $apiServer;
        $this->sentry    = $sentry;
    }

    /**
	* Return the Api Server
	*
	* @return ApiServer
	*/
	public function getApiServer()
	{
		return $this->apiServer;
	}


	/**
	* Return the Sentry
	*
	* @return Sentry
	*/
	public function getSentry()
	{
		return $this->sentry;
	}

    /**
     * The the option.
     *
     * @var Option
     */
    public function getOption()
    {
        if (is_null($this->option)) {
            $this->option = App::make('ebri.option');
        }

        return $this->option;
    }

    /**
     * The the Template.
     *
     * @var Template
     */
    public function getTemplate()
    {
        if (is_null($this->template)) {
            $this->template = App::make('ebri.template');
        }

        return $this->template;
    }

    /**
     * The the Locale.
     *
     * @var locale
     */
    public function getLocale()
    {
        if (is_null($this->locale)) {
            $this->locale = App::make('ebri.locale');
        }

        return $this->locale;
    }

    /**
     * Return the current User.
     *
     * @return User
     */
    public function getUser()
    {
        if ( ! is_object($this->user)) {
            try {
                $this->user = $this->getSentry()->getUser();
            } catch (\Cartalyst\Sentry\Users\UserNotFoundException $e) {}
        }

        return $this->user;
    }


    /**
     * Return a user meta data.
     *
     * @param  string $key
     * @return mixed
     */
    public function getUserMeta($key)
    {
        if (is_null($this->userMetas)) {
            $user = $this->getUser();

            if (is_object($user)) {
                $metas = $user->hasMany('Andriynto\Ebri\Models\UserMeta')->getResults();

                if ( ! $metas->isEmpty()) {
                    $metas = $metas->toArray();

                    foreach ($metas as $item) {
                        $this->userMetas[$item['key']] = $item['value'];
                    }

                    unset($metas);
                }

                unset($metas);
            }

            unset($user);
        }

        if (isset($this->userMetas[$key])) {
            return $this->userMetas[$key];
        }

        return '';
    }


    /**
     * Handle uploading files.
     *
     * @param  string $method
     * @param  string $targetPath
     * @return Response
     */
    public function upload($method, $targetPath)
    {
    	$request		= $this->getApiServer()->getRequest();
    	$overwrite		= $request->input('overwrite');
    	$ResponseFiles	= [];

    	if( ! in_array($overwrite, array('true', 'false')) )
    		$overwrite = true;
    	else
    	{
    		$overwrite = ($overwrite === 'true') ? true : $overwrite;
    		$overwrite = ($overwrite === 'false')? false : $overwrite;
    	}

    	$basePath = $this->getOption()->storage_path.'/rka';

    	// Create folder base path if not exist
        if ( ! FileFacade::isDirectory($basePath))
        {
            FileFacade::makeDirectory($basePath, Config::get('ebri::chmod_folder'), true);
            // @chmod($basePath, Config::get('kotakin::chmod_folder') & ~Config::get('kotakin::umask_folder'));
        }

        // Create folder base tmp path if not exist
        if ( ! FileFacade::isDirectory($basePath.'/tmp'))
        {
            FileFacade::makeDirectory($basePath.'/tmp', Config::get('ebri::chmod_folder'), true);
            // @chmod($basePath.'/tmp', Config::get('kotakin::chmod_folder') & ~Config::get('kotakin::umask_folder'));
        }

        //Handle uploaded file from POST Method
        if($method == 'post')
        {
        	$fieldName = $this->getOption()->upload_post_param_name;
            $files     = $this->getApiServer()->getRequest()->file($fieldName);

        	if( !empty($files))
        	{
                if ( ! empty($files)) 
                {
                    foreach ($files as $index => $file) 
                    {
                        $responseFiles[] = $this->handlePostFileUploadRka(
                            $basePath, 
                            $targetPath, 
                            $file, 
                            $overwrite
                        );
                    }
            	}
            }
            unset($files);

            $response             = new \stdClass;
            $response->$fieldName = $responseFiles;

            return $this->getApiServer()->collectionJson($response);
        }
    }

    private function handlePostFileUploadRka(
        $basePath, 
        $targetPath, 
        UploadedFile $uploadedFile, 
        $overwrite = true
    )
    {
        //handle the postfile upload
        $originalFileName = pathinfo($targetPath, PATHINFO_BASENAME);
        $extension        = strtolower(pathinfo($originalFileName, PATHINFO_EXTENSION));
        $storagePath      = $basePath;
        $fileName         = md5($originalFileName.time()) . '.' .$extension;
        $file             = $uploadedFile->move($storagePath, $fileName);
        
         
        Excel::load('rka/'.$fileName, function($reader) {
            $targetModel = new Target;
            $result = $reader->all()->toArray();

            $data_rka = $this->getTemplate()->saveBranchInstanding($result, $targetModel);
            
        });
    }

}
