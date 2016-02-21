/**
 * Created by orian.galkowicz on 21/02/2016.
 */
define(['jquery','underscore', 'backbone'], function ($,_,Backbone) {

    console.log("fetch+search");

    var Photo = Backbone.Model.extend({});

    var Photos = Backbone.Collection.extend({
        model: Photo,
        url: "https://api.flickr.com/services/rest/?method=flickr.photos.search"

    });

    var photos = new Photos();
    photos.fetch({
        data:{
            api_key:"808e97046a232c85deaf7aa1735a7026",
            text:"dogs",
            format:"json"

        },
        success: function(){
            console.log(response);
        },

        error: function(){}
    });


});
