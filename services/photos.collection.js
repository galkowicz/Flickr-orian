/**
 * Created by orian.galkowicz on 21/02/2016.
 */
define(['jquery', 'underscore', 'backbone', 'services/photo.model'], function ($, _, Backbone, Photo) {


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
            var urlToReturn = 'http://';
            var result = response.photos.photo.constructor();
            for (var attr in response.photos.photo){
                if (response.photos.photo.hasOwnProperty(attr))
                    result[attr] = response.photos.photo[attr];
                    urlToReturn +=
                        'farm'+response.photos.photo[attr]['farm']+'.staticflickr.com/'+
                               response.photos.photo[attr]['server']+'/'+
                               response.photos.photo[attr]['id']+'_'+
                               response.photos.photo[attr]['secret']+'_h.jpg';


                result[attr]['imgUrl'] = urlToReturn;
                urlToReturn = 'http://';
            }
            this.page = response.photos.page;
            this.perPage = response.photos.perpage;
            this.total = response.photos.pages;
            return result;
        },

        setSearchString: function(search){
            this.text = search;
        },

        next: function () {
            if (this.total  == this.page)
                return 'no more pages';
            this.page = this.page + 1;
        },

        prev: function () {
            if (this.page  == 0)
                return 'in start. only forward';
            this.page = this.page + 1;
        }
    });
});