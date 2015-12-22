
define(['backbone', 'models/settings/branch'], function(Backbone, Branch){

    var collection = Backbone.Collection.extend({
        url: apiUrl + '/branches',
        model: Branch
    });

    return collection;
});