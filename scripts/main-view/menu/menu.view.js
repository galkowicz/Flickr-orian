/**
 * Created by orian.galkowicz on 22/02/2016.
 */
define(['jquery', 'underscore', 'backbone', 'dot', 'text!../Orian_Flickr/scripts/main-view/menu/tmp/menu.html', 'photosService'], function ($, _, Backbone, dot, text, photosService) {


    return Backbone.View.extend({

        el: '#menu',

        events: {

            'change input': 'input_change'
        },


        initialize: function () {
            this.photosCollection = new photosService();

        },


        render: function () {

            this.$el.html(dot.template(text));
            return this;
        },

        input_change: function (e) {
            var searchString = $(e.currentTarget).val();
            console.log(searchString);
            this.photosCollection.findPhotos(searchString);
            this.saveToLocalStorage(searchString);
        },

        saveToLocalStorage : function(searchToHistory){
        }
    });
});