var LocationView = Backbone.View.extend({

  el: "#detail",

  initialize: function(){
    this.listenTo(this.model, "sync", this.render);
  },

  render: function(){
    var source = $("#detail-template").html();
    var template = Handlebars.compile(source);
    this.$el.html( template(this.model.toJSON) );
  }
});
