/**
 * Created by orian.galkowicz on 22/02/2016.
 */

define(['jquery','underscore', 'backbone','dot','text!../Orian_Flickr/scripts/main-view/header/tmp/bar.html'], function ($,_,Backbone, dot, text) {


    return Backbone.View.extend({

        el: '#header',

        events:{
            'click': "menuDisplay"
        },
        render: function(){

            this.$el.html(dot.template(text));
            return this;
        },

        menuDisplay: function(){
            console.log("show / hide  menu");
            this.trigger('menuClick');
        }

    });

});