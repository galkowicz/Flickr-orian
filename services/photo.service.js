/**
 * Created by orian.galkowicz on 25/02/2016.
 */


define(['jquery', 'underscore', 'backbone','services/photos.collection','scripts/main-view/photo-main/photo.model'], function ($, _, Backbone,PhotosCollection, Photo) {

    var photosCollection = new PhotosCollection();
    console.log("in service");


    function ServiceFlickr(){


    }

    ServiceFlickr.prototype = {
        getPhotos: function(search){
            photosCollection.fetchPhotos(search);

        }
    };


        return ServiceFlickr;

});