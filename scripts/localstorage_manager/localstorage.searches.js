/**
 * Created by orian.galkowicz on 29/02/2016.
 */


define(['jquery','underscore', 'backbone','localstorage','scripts/localstorage_manager/search.model'],function ($,_,Backbone,localstorage,Search){

    var counter = 0;

    return Backbone.Collection.extend({

        model: Search,


        localStorage: new Backbone.LocalStorage("searches") ,


        initialize: function(){

            if (localStorage.getItem('searches')) {
                var retrievedData = localStorage.getItem('searches');
                //var serachesId = retrievedData.substr(retrievedData.length - 1);
                counter = retrievedData.slice(-1);

                return counter
            }
         },

        addToLocalStorage: function (stringToAdd){

            if (counter == '10'){
                console.log("localFix");
                localStorage.setItem('searches', '0');

            }

            counter ++;
            this.create({searchString: stringToAdd,id:counter});
         }

    });

});