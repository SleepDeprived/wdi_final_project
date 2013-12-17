Dashboard.Collections.Summaries = Backbone.Collection.extend({
  url: "/github",

  model: Dashboard.Models.Summary,
  
  initialize: function(){
    this.fetch({
    	success: function(response) {
    		console.log(response);
    	}
    });
  }

  // main fetch should pull granular version of commit data
  // use custom functions here to differentially aggregate data to provide different outputs to user

});
