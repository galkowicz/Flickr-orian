/**
 * Created by orian.galkowicz on 22/02/2016.
 */
define(['jquery','underscore', 'backbone', 'menuview'], function ($,_,Backbone,menuview) {



    TheView = Backbone.View.extend({

        defaults :{},
        initialize: function(){

            this.inner = new menuView();

        },
        render: function(){
            this.$el.empty();
            this.$el.append(this.inner.$el);
            this.inner.render();
        }

    });

    $(document).ready(function() {
        var mainView = new TheView();
    });



});