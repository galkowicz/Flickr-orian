/**
 * Created by orian.galkowicz on 22/02/2016.
 */
define(['jquery','underscore', 'backbone'], function ($,_,Backbone) {

    return Backbone.Model.extend({

        defaults: {
            farm: '',
            server: '',
            id: '',
            secret: '',
            imgUrl:''
        }
    });

});