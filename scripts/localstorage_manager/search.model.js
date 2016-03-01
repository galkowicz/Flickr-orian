/**
 * Created by orian.galkowicz on 29/02/2016.
 */
define(['jquery','underscore', 'backbone'], function ($,_,Backbone) {

    return Backbone.Model.extend({

        idAttribute : 'id',
        id:'',
        searchString:''

    });


});