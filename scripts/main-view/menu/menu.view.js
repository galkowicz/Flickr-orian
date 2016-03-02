/**
 * Created by orian.galkowicz on 22/02/2016.
 */
define(['jquery', 'underscore', 'backbone',
    'dot', 'text!../Orian_Flickr/scripts/main-view/menu/tmpl/menu.html',
    'ServiceFlickr','scripts/localstorage_manager/localstorage.searches']
    , function ($, _, Backbone, dot, text, ServiceFlickr, SearchStorage) {

    var renderOnOff = true;

    return Backbone.View.extend({

        el: '#menu',

        events: {
            'change input': 'input_change'
        },


        options:{
            api_key: '346c2b5529f2926ea20aad4cc8c689fc',
            text: '',
            format: 'json',
            nojsoncallback: '1',
            per_page: 20,
            page: 1

        },


        initialize: function () {
            this.photosService = new ServiceFlickr(this.options);
            this.searchHistory = new SearchStorage();
            this.on('renderOnOff',this.onRenderOnOff(),this);

        },


        render: function () {

            this.$el.html(dot.template(text));
            renderOnOff = true;
            return this;
        },

        input_change: function (e) {
            //this.trigger('search');
            var searchString = $(e.currentTarget).val();
            console.log(searchString);
            this.photosService.getPhotos(searchString);//.then(this.trigger('search'));
            this.searchHistory.addToLocalStorage(searchString);
        },

        onRenderOnOff: function () {

            console.log("show/hide  in menu view");
            if (renderOnOff){

                renderOnOff = false;
            }
            else{

                renderOnOff = true;
            }
        },

        saveToLocalStorage : function(searchToHistory){
        }
    });
});