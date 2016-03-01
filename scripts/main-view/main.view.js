/**
 * Created by orian.galkowicz on 22/02/2016.
 */
define(['jquery','underscore', 'backbone','menuView', 'barView','mainPhotoView','footerView'], function ($,_,Backbone,menuView,barView,photoView,Footer) {



    TheView = Backbone.View.extend({



        initialize: function(){

            this.menuview = new menuView();
            this.menuview.render();
            this.menuview.on('search', this.searchEvent, this);

            this.barview = new barView();
            this.barview.on('menuClick', this.menuDisplay, this);
            this.barview.render();

            this.mainPhoto = new photoView();
            this.footerView = new Footer();


        },
        render: function(){

        },

        searchEvent: function(){
            console.log("someone searched");
            this.footerView.render();
            this.mainPhoto.render();
        },

        menuDisplay: function(){
            console.log("main view");
            this.menuview.onRenderOnOff();
        }

    });

    $(document).ready(function() {
        var mainView = new TheView();
        console.log("main view loaded");
    });

});