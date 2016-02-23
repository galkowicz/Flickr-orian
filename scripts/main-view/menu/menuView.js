/**
 * Created by orian.galkowicz on 22/02/2016.
 */
define(['jquery','underscore', 'backbone','dot','text!../Orian_Flickr/scripts/main-view/menu/menuTemplate.html'], function ($,_,Backbone, dot, text) {


    return Backbone.View.extend({

        el: '#menu',

        events: {

          'click .submit' : 'showAlert',
          'change input' : 'input_change'
        },

        showAlert: function(){
            alert('search clicked');
        },

        initialize: function(){
          _.bindAll(this, 'input_change')
        },

        render: function(){


            this.$el.html(dot.template(text));
            return this;
        },

        input_change: function(e){
            var $input = $(e.currentTarget);
            var searchString = $input.attr('#searchBar');
            console.log(searchString);
        //    just testing commits
        }

    });



});