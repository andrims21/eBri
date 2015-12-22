/*
 * This file is part of the eBri
 *
 * Author: Sulaeman <andriynto.dev@gmail.com>.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

 define([
 	'jquery',
 	'underscore',
 	'backbone',
 	'ebri',
    'jquery-ui', 
    'jquery-fu-iframe', 
    'jquery-fu-ui', 
    'select2'
 ], function($, _, Backbone, eBri) {
 	var App = Backbone.View.extend({
 		el: $('#settings-wrapper'),

 		settings: function(){
 			
 		},

	 	branch: function() {
	 		var self = this;

	 		eBri.renderContentPage(function() {
                self.$el.empty().html( _.template( $('#setting-retail-template').html() ) );
                //self.$el.append( _.template( $('#upload-modal-template').html() ));
                eBri.setDOMEventListeners();
            });
            return this;
	 	},

	 	uploadTargetRka: function(path) {
	 		var self = this;

            if (typeof path == 'undefined' || path == null) {
                path = '/';
            } else {
                path = '/' + path;
            }

            this.path = path;

            // Render collection Target RKA
            //var collectionRkaRitel = new CollectionRkaRitel();
            //collectionRkaRitel.renderRkaRitel(self.path, self.query);
            //delete collectionRkaRitel;

	 		eBri.renderContentPage(function() {
                self.$el.empty().html( _.template( $('#settings-upload-template').html() ) );
                self.$el.append( _.template( $('#upload-modal-template').html(), {
                    user: eBri.user.toJSON()
                } ) );
                eBri.setDOMEventListeners();
                
                $('input').placeholder();
                /* file upload */
                var folderPath = path;
                $.ajaxSetup({
                    headers: {
                        'Authorization': 'Bearer ' + eBri.at
                    }
                });

                var options = {
                    url: apiUrl + '/ops/file',
                    autoUpload: true,
                    filesContainer: '#upload-modal .files', 
                    maxChunkSize: uploadFileChunkSize,
                    submit: function (e, data) {
                        var overwrite = $('#upload-overwrite:checked').val();
                        if (typeof overwrite == 'undefined') {
                            overwrite = 'false';
                        }
                        data.url = '/upload/processing' + '/' + data.files[0].name + '?overwrite=' + overwrite;
                        delete overwrite;
                    },
                    progress: function (e, data) {
                        var progress = parseInt(data.loaded / (data.total * 1.1) * 100, 10);
                        var bar = data.context.find('.progress-bar');
                        $(bar).css('width', progress + '%');
                    }
                };


                if (typeof eBri.user.allowed_file_types != 'undefined') {
                    var fileTypesRegexp = new RegExp('(\.|\/)(' + eBri.user.allowed_file_types.replace(/,/g, '|') + ')$', 'i');
                    options.acceptFileTypes = fileTypesRegexp;
                    fileTypesRegexp = null;
                }

                $('#fileupload').fileupload(options);
                options = null;

                $('#fileupload').bind('fileuploadadd', function () {
                    $('#fileupload input[name="access_token"]').val(eBri.at);
                    $('.a-close-file-modal').addClass('hidden');
                    $('.choose-files-intro').addClass('hidden');

                }).bind('fileuploadstart', function () {
                    $('.a-close-file-modal').addClass('hidden');
                    $('.choose-files-intro').addClass('hidden');
                }).bind('fileuploadstop', function () {
                    $('.a-close-file-modal').removeClass('hidden');
                }).bind('fileuploaddestroyed', function () {
                    $('.a-close-file-modal').removeClass('hidden');
                }).bind('fileuploaddone', function(e, data) {
                    Backbone.pubSub.trigger('collection.fetch', {});
                    $('.a-close-file-modal').removeClass('hidden');
                }).bind('fileuploadfail', function(e, data) {});


            });
            return this;
	 	}
 	});

 	return App;
 });