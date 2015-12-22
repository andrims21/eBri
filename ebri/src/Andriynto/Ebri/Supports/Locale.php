<?php
namespace Andriynto\Ebri\Supports;


class Locale
{

    protected $domain = 'ebri';
    protected $locale;
    protected $localePath;
    
    /**
     * Create a new instance.
     *
     * @param  string $locale
     * @param  string $path
     * @return void
     */
    public function __construct($locale = '', $path = '')
    {
       $this->setLocale($locale, $path);
    }

    /**
     * Set current locale.
     *
     * @param  string $locale
     * @param  string $path
     * @return string
     */
	public function setLocale($locale, $path = '')
    {
        if (function_exists('putenv')) {
            @putenv('LC_ALL='.$locale);
        }
        
        setlocale(LC_ALL, $locale);

        $this->locale = $locale;

        if ( ! empty($path)) {
            $this->localePath = $path;
        }

        // path to the .MO file that we should monitor
        $file = $this->localePath.'/'.$locale.'/LC_MESSAGES/'.$this->domain.'.mo';

        if (file_exists($file)) {
            // check its modification time
            $mtime = filemtime($file);

            // our new unique .MO file
            $newFile = $this->localePath.'/'.$locale.'/LC_MESSAGES/'.$this->domain.'_'.$mtime.'.mo';
            
            // check if we have created it before
            if ( ! file_exists($newFile)) {
                // if not, create it now, by copying the original
                if (@copy($file, $newFile)) {
                    $this->domain = $this->domain.'_'.$mtime;
                }
            }
        }

        return $locale;
    }

    /**
     * Translate a text.
     *
     * @param  string $text
     * @return string
     */
    public function t($text)
    {
        if (is_null($this->localePath))
            return $text;

        bind_textdomain_codeset($this->domain, 'UTF-8');
        bindtextdomain($this->domain, $this->localePath);
        textdomain($this->domain);

        return _($text);
    }

}
