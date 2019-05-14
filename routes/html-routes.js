// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.render('index');
  });

  app.get("/signup", function(req, res) {
    res.render('signup');
  });

  app.get("/dash", function(req, res) {
    res.render('dash', {link:'/rate'});
  });

  app.get("/add", function(req, res) {
    res.render('recipe_form');
  });

  app.get("/search", function(req, res) {
    res.render('recipe_search');
  });

  app.get("/rate", function(req, res) {
    res.render('recipe_rate');
  });


};
