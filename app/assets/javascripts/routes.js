App.Router = Backbone.Router.extend({
  routes: {
    ""          : "index",
    "new"       : "new"
  },
  initialize: function(){
    Backbone.history.start();
  },

  index: function(){
    console.log('bb router index');
    // model
    // var devLocation = new App.Models.Location();
    // collection
    var devLocations = new App.Collections.Locations();
    // collection view for all locations
    var locationsView = new App.Views.LocationsView({collection: devLocations});
  },
  new: function(){
    // form to create new location
    var locationForm = new App.Views.LocationForm();
  },

  // summary graph on the dashboard when it loads
  dashboard: function(){
    console.log('dashboard');
    // summary will provide an overview of commits
    // initial version will be for a week
    // Creates the collection to be passed into the view
    var summary = new Project.Collections.Summaries();
    // Creates the view that will be appended to the page
    new Project.Views.SummariesView({collection: summary})
  }

});



// // code from in class exercise using as a template... to be deleted
// routes: {
//     ""             : "index",
//     "exercises"          : "new",
//     "random" : "random"
//   },

//   index: function(){
//     console.log("index");
//     exercises = new Exercises();
//     exercisesView = new ExercisesView({collection: exercises});
//   },
//   new: function(){
//     console.log('new');
//     newForm = new ExerciseForm();
//   },
//   random: function() {
//     randomView = new RandomView();
//   }
