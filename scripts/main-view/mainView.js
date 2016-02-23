/**
 * Created by orian.galkowicz on 22/02/2016.
 */
define(['jquery','underscore', 'backbone','menuView', 'barView'], function ($,_,Backbone,menuView,barView) {



    TheView = Backbone.View.extend({



        initialize: function(){



        },
        render: function(){

        }

    });

    $(document).ready(function() {


        var mainView = new TheView();
        mainView.render();

        var menuview = new menuView();
        menuview.render();

        var barview = new barView();
        barview.render();

        console.log("main view loaded");
    });



});