/**
 * Created by orian.galkowicz on 22/02/2016.
 */
define(['jquery','underscore', 'backbone','menuView', 'barView'], function ($,_,Backbone,menuView,barView) {



    TheView = Backbone.View.extend({



        initialize: function(){

            var menuview = new menuView();
            menuview.render();
            menuview.on('search', this.searchEvent, this);

            var barview = new barView();
            barview.render();




        },
        render: function(){

        },

        searchEvent: function(){
            console.log("someone searched");
        }

    });

    $(document).ready(function() {
        var mainView = new TheView();
        console.log("main view loaded");
    });

});