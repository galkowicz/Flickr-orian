/**
 * Created by orian.galkowicz on 22/02/2016.
 */
define(['jquery','underscore', 'backbone','dot','text!../Orian_Flickr/scripts/main-view/menu/menuTemplate.html'], function ($,_,Backbone, dot, text) {


    return Backbone.View.extend({

        el: '#menu',


        render: function(){

            this.$el.html(dot.template(text));
            return this;
        }

    });

    //var searchString = Backbone.View.extend({
    //
    //    events: {
    //        'changeInput': 'newSearch'
    //    },
    //
    //
    //
    //    newSearch: function (e) {
    //        var val = $(e.currentTarget).val();
    //        $('#search').html(val);
    //    }
    //
    //});



});