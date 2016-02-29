/**
 * Created by orian.galkowicz on 25/02/2016.
 */


define(['jquery', 'underscore', 'backbone', 'services/photos.collection', 'services/photo.model'], function ($, _, Backbone, PhotosCollection, Photo) {

    var photosCollection = new PhotosCollection([], {
        api_key: '346c2b5529f2926ea20aad4cc8c689fc',
        text: '',
        format: 'json',
        nojsoncallback: '1',
        per_page: 20,
        page: 1
    });

    console.log("in service");

    function ServiceFlickr() {}

    ServiceFlickr.prototype = {

        getPhotos: function (search) {
            photosCollection.setSearchString(search);
            photosCollection.fetch();

        },
        nextPage: function () {
            photosCollection.next();
            photosCollection.fetch();
        },
        getPhoto: function (number) {
            console.log("creating url");
            console.log(photosCollection.at(0));
            return photosCollection.at(0);
        }
    };

    return ServiceFlickr;

});