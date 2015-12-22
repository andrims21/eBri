<?php namespace Andriynto\Ebri\Apis\v1\Templates\Setting;


class Branch extends Template 
{
	/**
     * Prepare the data to retreive.
     *
     * @return void
     */
    public function prepareData()
    {
		 $this->setAttribute('id', null, $this->getModel()->key);
		 $this->setAttribute('name', null, $this->getModel()->value);
		 $this->setAttribute('created_at');
		 $this->setAttribute('updated_at');
	}
}