/**
 * Created by orian.galkowicz on 21/02/2016.
 */
define(['jquery','underscore', 'backbone','scripts/main-view/photo-main/photo.model'], function ($,_,Backbone,Photo) {



    return Backbone.Collection.extend({

        model: Photo,

        url: "https://api.flickr.com/services/rest/?method=flickr.photos.search",


        fetchPhotos: function (search) {

            var data = {
                data: {
                    api_key: '346c2b5529f2926ea20aad4cc8c689fc',
                    text: search,
                    format: 'json',
                    nojsoncallback: '1'
                }
            };
            var that = this;
            this.fetch(data)
                .success(function (res) {
                    console.log('success');
                    console.log(res);
                    that.getPhotoUrl();

                }).error(function (error) {
                console.log(error);
            });
        },



        generatePhoto: function(photosJSON){

            var farmId = photosJSON['photos']['photo'][0]['farm'];
            var serverId =photosJSON['photos']['photo'][0]['server'];
            var id = photosJSON['photos']['photo'][0]['id'];
            var secret = photosJSON['photos']['photo'][0]['secret'];

            return new Photo({
                farmId: farmId,
                serverId: serverId,
                id: id,
                secret: secret
            })
        },

        getPhotoUrl: function (photoModel){


        }


    });



});