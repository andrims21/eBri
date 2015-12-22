

define(['backbone', 'moment'], function(Backbone, Moment){

    var model = Backbone.Model.extend({
        url: function() {
            
            if (this.isNew()) {
                return apiUrl + '/branch';
            } else {
                return apiUrl + '/branch/' + this.get('id');
            }
        },

        parse: function(resp, option) {
            //resp.last_login = Moment(resp.last_login).format('llll');

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

            return resp;
        }
    });


    return model;
});