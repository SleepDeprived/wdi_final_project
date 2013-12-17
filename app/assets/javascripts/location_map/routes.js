App.Router = Backbone.Router.extend({
  routes: {
    ""          : "index"
    // "new"       : "new"
  },

  initialize: function(){
    Backbone.history.start();
    var devLocation = new App.Models.Location();
    App.main = new App.Views.Main({model: devLocation});
  },

  index: function(){
    console.log('bb router index');
    // collection
    var devLocations = new App.Collections.Locations();
    // collection view for all locations
    var locationsView = new App.Views.LocationsView({collection: devLocations});
    // debugger;
  },

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
