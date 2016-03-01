/**
 * Created by orian.galkowicz on 21/02/2016.
 */
define(['jquery', 'underscore', 'backbone', 'services/photo.model'],
    function ($, _, Backbone, Photo) {

        return Backbone.Collection.extend({

            default: {
                perPage: 20,
                pageNumber: 1
            },

            model: Photo,

            baseUrl: "https://api.flickr.com/services/rest/?method=flickr.photos.search",

            url: function () {
                genUrl = this.baseUrl
                    + '&api_key=' + this.api_key
                    + '&format=' + this.format
                    + '&nojsoncallback=' + this.nojsoncallback
                    + '&per_page=' + this.per_page
                    + '&page=' + this.page
                    + '&text=' + this.text;

                console.log(genUrl);
                return genUrl;
            },


            initialize: function (models, options) {
                this.api_key = options.api_key;
                this.format = options.format;
                this.nojsoncallback = options.nojsoncallback;
                this.per_page = options.per_page;
                this.page = options.page;
            },

            parse: function (response) {

                this.page = response.photos.page;
                this.perPage = response.photos.perpage;
                this.total = response.photos.pages;
                var data = response.photos.photo;

                return _.each(data,function (photoObject){
                    console.log(photoObject);
                    photoObject.imgUrl = 'http://farm' + photoObject.farm + '.staticflickr.com/' +
                    photoObject.server + '/' +
                    photoObject.id + '_'+
                    photoObject.secret + '_h.jpg';
                }.bind(this));

            },

            setSearchString: function (search) {
                this.text = search;
            },

            next: function () {
                if (this.total != this.page) {
                    this.page = this.page + 1;
                }
            },

            prev: function () {
                if (this.page != 0) {
                    this.page = this.page - 1;
                }
            }
        });
    });