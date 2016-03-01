/**
 * Created by orian.galkowicz on 22/02/2016.
 */

define(['jquery','underscore', 'backbone'], function ($,_,Backbone) {
    var Photo = Backbone.Model.extend({

        defaults: {

            farmId: '',
            serverId: '',
            id: '',
            secret: ''

        }
    });

});