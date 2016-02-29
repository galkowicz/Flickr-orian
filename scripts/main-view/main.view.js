/**
 * Created by orian.galkowicz on 22/02/2016.
 */
define(['jquery','underscore', 'backbone','menuView', 'barView','mainPhotoView'], function ($,_,Backbone,menuView,barView,photoView) {



    TheView = Backbone.View.extend({



        initialize: function(){

            this.menuview = new menuView();
            this.menuview.render();
            this.menuview.on('search', this.searchEvent, this);

            this.barview = new barView();
            this.barview.on('menuClick', this.menuDisplay, this);
            this.barview.render();

            this.mainPhoto = new photoView()

        },
        render: function(){

        },

        searchEvent: function(){
            console.log("someone searched");
            this.mainPhoto.render();
        },

        menuDisplay: function(){
            this.menuview.trigger('renderOnOff');
        }

    });

    $(document).ready(function() {
        var mainView = new TheView();
        console.log("main view loaded");
    });

});