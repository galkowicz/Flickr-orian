

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
        menuView:"scripts/main-view/menu/menu.view",
        barView:"scripts/main-view/header/bar.view",
        mainPhotoView:"scripts/main-view/photo-main/photo.view",
        footerView:"scripts/main-view/footer/bottom.view",
        ServiceFlickr:"services/flickr.photo.service",
        localstorage:"//cdnjs.cloudflare.com/ajax/libs/backbone-localstorage.js/1.1.16/backbone.localStorage-min"
    }

});

// Load the main app module to start the app

require(['App'], function(){
    require(['scripts/main-view/main.view.js']);
});
