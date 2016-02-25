/**
 * Created by orian.galkowicz on 22/02/2016.
 */
define(['jquery', 'underscore', 'backbone', 'dot', 'text!../Orian_Flickr/scripts/main-view/menu/tmp/menu.html', 'ServiceFlickr'], function ($, _, Backbone, dot, text, ServiceFlickr) {


    return Backbone.View.extend({

        el: '#menu',


        events: {

            'change input': 'input_change'
        },


        initialize: function () {
          this.photosService = new ServiceFlickr();
            console.log(this.photosService);
        },


        render: function () {

            this.$el.html(dot.template(text));
            return this;
        },

        input_change: function (e) {
            this.trigger('search');
            var searchString = $(e.currentTarget).val();
            console.log(searchString);
            this.photosService.getPhotos(searchString);

            this.saveToLocalStorage(searchString);
        },

        saveToLocalStorage : function(searchToHistory){
        }

    });


});