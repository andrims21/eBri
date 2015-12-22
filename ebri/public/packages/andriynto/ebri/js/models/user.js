
define(['backbone', 'moment'], function(Backbone, Moment){
    var model = Backbone.Model.extend({
        url: function() {
            return apiUrl + '/user';
        },

        parse: function(resp, option) {
            resp.last_login = Moment(resp.last_login).format('llll');

            if (typeof resp.username == 'undefined') {
                resp.username = resp.email;
            }
            
            if (typeof resp.first_name == 'undefined') {
                resp.first_name = '';
            }

            if (typeof resp.last_name == 'undefined') {
                resp.last_name = '';
            }

            if (typeof resp.display_name == 'undefined') {
                resp.display_name = resp.first_name + ' ' + resp.last_name;
            }

            if (typeof resp.quota_bytes == 'undefined') {
                resp.quota_bytes = 0;
            }

            if (typeof resp.quota_used_bytes == 'undefined') {
                resp.quota_used_bytes = 0;
            }

            if (typeof resp.quota_free_bytes == 'undefined') {
                resp.quota_free_bytes = 0;
            }

            if (resp.quota_bytes > 0) {
                resp.quota_percentage = (resp.quota_used_bytes / resp.quota_bytes) * 100;
            }

            return resp;
        }
    });


    return model;
});