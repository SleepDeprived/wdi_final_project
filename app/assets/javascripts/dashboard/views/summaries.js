Dashboard.Views.SummariesView = Backbone.View.extend({

  el: "#graph",

  events: {
    // ADD EVENTS HERE TO LISTEN FOR THE USER ASKING FOR A DIFFERENT GRAPH
    // "click li" : "detail"
  },

  initialize: function(){
    // currently using this.render(); to force the page to load on render since not hitting GitHub and transferring data yet
    this.render();
    // might use the next function if the page needs to wait for GitHub to respond with data before the page can render, this should trigger the add method on the collection
    // this.listenTo(this.collection, "sync add", this.render);
    // this.allData = [];   (Jorge added this, potentially delete)
    
  },

  render: function(){

  	// looping through each model in the collection to pull the data element to populate the array that highcharts can display
    // move this to the collection
    // replace with this.collection.foo
    // this.collection.each(function(currentModel){
    // 	var modelData = currentModel.get('data');
    // 	this.allData.push(modelData);
    $(function () {
      // change this.$el.highcharts({
      $('#chart').highcharts({
        chart : { 
          type: 'column'
        },
        title: {
          text: 'Editors At Seattle.rb'
        },
        yAxis : {
          title: { text: "Number of People" }
        },
        xAxis : {
          categories: 
            ["emacs", 
             "vim", 
             "other"]
        },
        series: [{
          name: "Editors",
          data: [10, 5, 3]  //this.allData
        }]
      });
    });

  },


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



