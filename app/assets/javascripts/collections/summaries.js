Project.Collections.Summaries = Backbone.Collection.extend({
  url: "/github",
  model: Exercise,
  initialize: function(){
    this.fetch();
  }

  // main fetch should pull granular version of commit data
  // use custom functions here to differentially aggregate data to provide different outputs to user

});
