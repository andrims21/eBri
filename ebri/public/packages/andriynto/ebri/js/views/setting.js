define([
    'jquery', 
    'underscore', 
    'backbone', 
    'ebri',
    'jquery-ui', 
    'jquery-fu-iframe', 
    'jquery-fu-ui', 
    'select2', 
    'views/settings/branches'
], function($, _, Backbone, eBri, BranchView) {
    var App = Backbone.View.extend({

    	el: $('#setting-wrapper'),

    	general : function() {

    	},

    	branch : function() {
    		var self = this;

    		eBri.renderContentPage(function() {
    			var branchView = new BranchView();
                branchView.render(self.$el);
                delete branchView;
    		});

    		return this;
    	},

    	office : function() {

    	},

    	upload : function() {

    	},

        uploadedRka : function(path) {
            var self = this;

            if (typeof path == 'undefined' || path == null) {
                path = '/';
            } else {
                path = '/' + path;
            }

            this.path = path;

            eBri.renderContentPage(function() {
                self.$el.empty().html( _.template( $('#settings-upload-template').html() ) );
                self.$el.append( _.template( $('#upload-modal-template').html(), {
                    user: eBri.user.toJSON()
                } ) );

                self.$el.append( _.template( $('#download-modal-template').html(), {
                    user: eBri.user.toJSON()
                } ) );
                eBri.setDOMEventListeners();

                $('input').placeholder();
                 /* file upload */
                var folderPath = path;
                if (folderPath != '/') {
                    folderPath = folderPath + '/';
                }

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
                        data.url = apiUrl + '/ops/file' + folderPath + data.files[0].name + '?overwrite=' + overwrite;
                        delete overwrite;
                    },
                    progress: function (e, data) {
                        var progress = parseInt(data.loaded / (data.total * 1.1) * 100, 10);
                        var bar = data.context.find('.progress-bar');
                        $(bar).css('width', progress + '%');
                    },

                    success: function(response) {
                         $('#upload-modal').modal('hide');
                         location.reload();
                    }
                };

                if (typeof eBri.user.allowed_file_types != 'undefined')
                {
                    var fileTypesRegexp = new RegExp('(\.|\/)(' + eBri.user.allowed_file_types.replace(/,/g, '|') + ')$', 'i');
                    options.acceptFileTypes = fileTypesRegexp;
                    fileTypesRegexp = null;
                }

                $('#fileupload').fileupload(options);
                options = null;

            }); 

            return this;
        }

    });

    return App;

});