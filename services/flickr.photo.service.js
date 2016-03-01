/**
 * Created by orian.galkowicz on 25/02/2016.
 */


define(['jquery', 'underscore', 'backbone', 'services/photos.collection', 'services/photo.model'], function ($, _, Backbone, PhotosCollection, Photo) {

    var photosCollection = new PhotosCollection([], {collection:photosCollection});

    console.log("in service");

    function ServiceFlickr(options) {
        photosCollection.api_key=options.api_key;
        photosCollection.text=options.text;
        photosCollection.format=options.format;
        photosCollection.nojsoncallback=options.nojsoncallback;
        photosCollection.per_page=options.per_page;
        photosCollection.page=options.page;
    }

    ServiceFlickr.prototype = {

        getPhotos: function (search) {
            photosCollection.setSearchString(search);
            photosCollection.fetch().done(function(){
                console.log("returned data");
            });


                //return new Promise(function (resolve, reject) {
                //    setTimeout (function () {
                //            resolve(photosCollection.fetch());
                //        },5000);
                //
                //    // or
                //    // reject ("Error!");
                //});

        },

        nextPage: function () {
            photosCollection.next();
            photosCollection.fetch();
        },

        prevPage: function(){
            photosCollection.prev();
            photosCollection.fetch();
        },
        getPhotoUrl: function (number) {
            console.log(photosCollection.at(number)['attributes']['imgUrl']);
            return photosCollection.at(number)['attributes']['imgUrl'];
        }
    };

    return ServiceFlickr;

});