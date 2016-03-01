/**
 * Created by orian.galkowicz on 29/02/2016.
 */


define(['jquery','underscore', 'backbone','localstorage','scripts/localstorage_manager/search.model'],function ($,_,Backbone,localstorage,Search){

    var counter = 0;

    return Backbone.Collection.extend({

        model: Search,


        localStorage: new Backbone.LocalStorage("searches") ,


        initialize: function(){
            var retrievedData = localStorage.getItem('searches');
            counter = retrievedData.substr(retrievedData.length - 1);
         },


        addToLocalStorage: function (stringToAdd){
            counter ++;
            this.create({searchString: stringToAdd,id:counter});
         }

    });

});