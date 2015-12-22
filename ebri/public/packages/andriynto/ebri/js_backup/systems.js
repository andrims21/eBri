/*
 * This file is part of the eBri
 *
 * Author: Andriyanto <me@andriynto.me>.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

require.config({
	baseUrl : baseUrl + "/packages/andriynto/ebri/js",
	paths : {
		jquery 					: "vendor/jquery/jquery-1.10.2.min",
        bootstrap 				: "vendor/bootstrap.min",
        "jquery-ui" 			: "vendor/jquery/jquery-ui.custom.min",
        "jquery.ui.widget"		: "vendor/jquery/jquery.ui.widget.min",
        underscore				: "vendor/underscore",
        "underscore.string"		: "vendor/underscore.string.min",
        backbone 				: "vendor/backbone",
        json 					: "vendor/json2",
        "jquery-md5"			: "vendor/jquery/jquery.md5",
        "jquery-base64"			: "vendor/jquery/jquery.base64",
        "jquery-placeholder"	: "vendor/jquery/jquery.placeholder",
        "jquery-swipebox"		: "vendor/jquery/jquery.swipebox.min",
        "jquery.cookie"			: "plugins/jquery.cookie",
        moment 					: "vendor/moment-with-langs.min",
        "jquery-noty"			: "vendor/jquery/jquery.noty.packaged.min",
		select2					: "vendor/select2.min",
		"icheck"				: "plugins/iCheck/icheck.min",
		"jquery.fancybox"		: "plugins/fancybox/jquery.fancybox",
		"prettify"				: "plugins/fancybox/prettify",
		"parsley"				: "plugins/parsley",
		"bootstrap-datetimepicker" : "plugins/datepicker/js/bootstrap/bootstrap-datetimepicker.min",
		"bootstrap.datetimepicker" : "plugins/bootstrap.datetimepicker/js/bootstrap-datetimepicker.min.js",
		"jquery.jCombo"			: "plugins/jquery.jCombo.min",
		"summernote"			: "plugins/bootstrap.summernote/summernote.min",
		"jquery.markitup"		: "plugins/markitup/jquery.markitup",
		"jquery.markitup.set"	: "plugins/markitup/sets/default/set",
		"jquery.form"			: "plugins/ajax/jquery.form",
		"dfadmin"				: "dfadmin",
		'jquery-fu': 'vendor/jquery-file-upload/jquery.fileupload',
        'jquery-fu-process': 'vendor/jquery-file-upload/jquery.fileupload-process',
        'jquery-fu-iframe': 'vendor/jquery-file-upload/jquery.iframe-transport',
        'jquery-fu-ui': 'vendor/jquery-file-upload/jquery.fileupload-ui',
        'jquery-fu-image': 'vendor/jquery-file-upload/jquery.fileupload-image',
        'jquery-fu-audio': 'vendor/jquery-file-upload/jquery.fileupload-audio',
        'jquery-fu-video': 'vendor/jquery-file-upload/jquery.fileupload-video',
        'jquery-fu-validate': 'vendor/jquery-file-upload/jquery.fileupload-validate',
        'jquery-fu-cors-post': 'vendor/jquery-file-upload/cors/jquery.postmessage-transport',
        'jquery-fu-cors-xdr': 'vendor/jquery-file-upload/cors/jquery.xdr-transport',
        'load-image': 'vendor/load-image/load-image',
        'load-image-meta': 'vendor/load-image/load-image-meta',
        'load-image-exif': 'vendor/load-image/load-image-exif',
        'load-image-ios': 'vendor/load-image/load-image-ios',
        'canvas-to-blob': 'vendor/canvas-to-blob.min',
        'tmpl': 'vendor/tmpl.min',
        'select2': 'vendor/select2.min',
        'video': '../videojs/video',
        'audio': '../audiojs/audio.min',
        'ace': 'vendor/ace/ace'

	}, waitSecond : 0
}), define("general", function() {});


/*
 * This file is part of the Kotakin
 *
 * Author: Sulaeman <me@sulaeman.com>.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

require.config({
    baseUrl: '/packages/andriynto/ebri/js',
    paths: {
        'jquery': 'vendor/jquery/jquery-1.10.2.min',
        'bootstrap': 'vendor/bootstrap.min',
        'jquery-ui': 'vendor/jquery/jquery-ui.custom.min',
        'jquery.ui.widget': 'vendor/jquery/jquery.ui.widget.min',
        'underscore': 'vendor/underscore',
        'underscore.string': 'vendor/underscore.string.min',
        'backbone': 'vendor/backbone',
        'json': 'vendor/json2',
        "jquery.cookie"			: "plugins/jquery.cookie",
        'jquery-md5': 'vendor/jquery/jquery.md5',
        'jquery-base64': 'vendor/jquery/jquery.base64',
        'jquery-placeholder': 'vendor/jquery/jquery.placeholder',
        'jquery-swipebox': 'vendor/jquery/jquery.swipebox.min',
        'moment': 'vendor/moment-with-langs.min',
        'jquery-fu': 'vendor/jquery-file-upload/jquery.fileupload',
        'jquery-fu-process': 'vendor/jquery-file-upload/jquery.fileupload-process',
        'jquery-fu-iframe': 'vendor/jquery-file-upload/jquery.iframe-transport',
        'jquery-fu-ui': 'vendor/jquery-file-upload/jquery.fileupload-ui',
        'jquery-fu-image': 'vendor/jquery-file-upload/jquery.fileupload-image',
        'jquery-fu-audio': 'vendor/jquery-file-upload/jquery.fileupload-audio',
        'jquery-fu-video': 'vendor/jquery-file-upload/jquery.fileupload-video',
        'jquery-fu-validate': 'vendor/jquery-file-upload/jquery.fileupload-validate',
        'jquery-fu-cors-post': 'vendor/jquery-file-upload/cors/jquery.postmessage-transport',
        'jquery-fu-cors-xdr': 'vendor/jquery-file-upload/cors/jquery.xdr-transport',
        'load-image': 'vendor/load-image/load-image',
        'load-image-meta': 'vendor/load-image/load-image-meta',
        'load-image-exif': 'vendor/load-image/load-image-exif',
        'load-image-ios': 'vendor/load-image/load-image-ios',
        'canvas-to-blob': 'vendor/canvas-to-blob.min',
        'tmpl': 'vendor/tmpl.min',
        'select2': 'vendor/select2.min',
        'video': '../videojs/video',
        'audio': '../audiojs/audio.min',
        'ace': 'vendor/ace/ace',
        'jquery-noty': 'vendor/jquery/jquery.noty.packaged.min',
    },
    waitSeconds: 0
});