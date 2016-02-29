/**
 * Created by orian.galkowicz on 22/02/2016.
 */


define(['jquery', 'underscore', 'backbone', 'dot', 'text!../Orian_Flickr/scripts/main-view/photo-main/tmp/photo.html', 'ServiceFlickr'], function ($, _, Backbone, dot, text, ServiceFlickr) {




    return Backbone.View.extend({

        el: '#container',

        events: {
            /*
               - left/right on main photo
               - favourite click

             */
        },

        initalize: function(){
            this.photosService = new ServiceFlickr();
        },

        render: function(){
            this.$el.html(dot.template(text));
            this.renderMain();
            return this;
        },

        renderMain: function(){
            //this.photosService.getPhotoUrl();
        }

    });

});