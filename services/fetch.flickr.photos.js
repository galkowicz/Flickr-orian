/**
 * Created by orian.galkowicz on 21/02/2016.
 */
define(['jquery','underscore', 'backbone'], function ($,_,Backbone) {




    return Backbone.Collection.extend({

        url: "https://api.flickr.com/services/rest/?method=flickr.photos.search",


        findPhotos: function (search) {

            var data = {
                data: {
                    api_key: '346c2b5529f2926ea20aad4cc8c689fc',
                    text: search,
                    format: 'json',
                    nojsoncallback: '1'
                }
            };

            this.fetch(data)
                .success(function (res) {
                    console.log('success');
                    console.log(res);
                }).error(function (error) {
                console.log(error);
            });


        },




    });



});