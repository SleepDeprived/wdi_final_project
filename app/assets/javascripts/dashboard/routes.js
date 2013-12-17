Dashboard.Router = Backbone.Router.extend({
  routes: {
    // ""          : "index",
    ""       : "dashboard"
  },

  initialize: function(){
    Backbone.history.start();
  },

  // summary graph on the dashboard when it loads
  dashboard: function(){
    console.log('dashboard');
    // debugger;
    // summary will provide an overview of commits
    // initial version will be for a week
    // Creates the collection to be passed into the view
    var summary = new Dashboard.Collections.Summaries();
    // Creates the view that will be appended to the page
    new Dashboard.Views.SummariesView({collection: summary});
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
