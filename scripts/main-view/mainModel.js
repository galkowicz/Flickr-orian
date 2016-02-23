/**
 * Created by orian.galkowicz on 22/02/2016.
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
            api_key:'346c2b5529f2926ea20aad4cc8c689fc',
            text:'dogs',
            format:'json',
            nojsoncallback:'1'
        }
    }).success(function (res) {
        console.log('success');
        console.log(res);
    }).error(function (error) {
        console.log(error);
    });


});