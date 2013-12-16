Project.Views.SummariesView = Backbone.View.extend({

  el: "#summary-data",

  events: {
    // "click li" : "detail"
  },

  initialize: function(){
    this.listenTo(this.collection, "sync add", this.render);
    this.allData = [];
  },

  render: function(){

  	// looping through each model in the collection to pull the data element to populate the array that highcharts can display
    this.collection.each(function(currentModel){
    	var modelData = currentModel.get('data');
    	this.allData.push(modelData);
    });

		    // // this.cleanUp();
		    // // this is the step by step way to compile a handlebars template
		    // // there is a precompiler gem (handlebars-assets) that can be used
		    // 	// look into this gem later
		    // var source = $("#summary-template").html();
		    // var template = Handlebars.compile( source );
		    // // collection was passed into the view when the view was created in the router
		    // var exercisesJSON = this.collection.toJSON();
		    // var view = template( {exercises: exercisesJSON });
		    // this.$el.html( view );

    // Put highcharts stuff here
   // highcharts appends to the view for me

  }

});
