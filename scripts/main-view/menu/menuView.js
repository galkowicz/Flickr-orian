/**
 * Created by orian.galkowicz on 22/02/2016.
 */

    var menuView = Backbone.View.extend({

        el: '#menu',

        render: function(){
            this.$el.html("hello");
            this.delegateEvents();
        }

    });

    var searchString = Backbone.View.extend({

        events : {
            'changeInput' : 'newSearch'
        },

    });

