

/**
* Created by orian.galkowicz on 21/02/2016.
*/

requirejs.config({

    "baseUrl": "",

    "paths": {
        jquery: "//ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min",
        underscore:"//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min",
        backbone:"//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.2.3/backbone",
        dot:"//cdnjs.cloudflare.com/ajax/libs/dot/1.0.3/doT",
        bootsrtap:"//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min",
        text:"//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text",
        menuview:"//scripts/main-view/menu/menuView"
    }

});

// Load the main app module to start the app

require(['App'], function(){
    require(['scripts/main-view/mainView.js']);
});

