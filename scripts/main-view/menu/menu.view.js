/**
 * Created by orian.galkowicz on 22/02/2016.
 */
define(['jquery', 'underscore', 'backbone', 'dot', 'text!../Orian_Flickr/scripts/main-view/menu/tmp/menu.html', 'ServiceFlickr'], function ($, _, Backbone, dot, text, ServiceFlickr) {

    var renderOnOff = true;

    return Backbone.View.extend({

        el: '#menu',

        events: {
            'change input': 'input_change'
        },


        initialize: function () {
          this.photosService = new ServiceFlickr();
            this.on('renderOnOff',this.onRenderOnOff(),this);
        },


        render: function () {

            this.$el.html(dot.template(text));
            renderOnOff = true;
            return this;
        },

        input_change: function (e) {
            this.trigger('search');
            var searchString = $(e.currentTarget).val();
            console.log(searchString);
            this.photosService.getPhotos(searchString);

            this.saveToLocalStorage(searchString);
        },

        onRenderOnOff: function () {
            if (renderOnOff){

                renderOnOff = false;
            }
            else{

                renderOnOff = true;
            }
        },

        saveToLocalStorage : function(searchToHistory){
        }

    });


});