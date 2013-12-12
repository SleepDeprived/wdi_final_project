App.Router = Backbone.Router.extend({
  routes: {
    ""  : "index"
  },
  initialize: function(){
    Backbone.history.start();
  },
  index: function(){
    console.log('index');
  }
});
