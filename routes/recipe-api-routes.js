// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/recipes", function(req, res) {
    var query = {};
    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    }
    db.Recipe.findAll({
      where: query
    }).then(function(result) {
      res.json(result);
    });
  });

  // Get route for retrieving a single post
  app.get("/api/recipes/:id", function(req, res) {
    db.Recipe.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      console.log(result);
      res.json(result);
    });
  });

  // POST route for saving a new post
  app.post("/api/recipes", function(req, res) {
    db.Recipe.create(req.body).then(function(result) {
      res.json(result);
    });
  });

  // DELETE route for deleting posts
  app.delete("/api/recipes/:id", function(req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      res.json(result);
    });
  });

  // PUT route for updating posts
  app.put("/api/recipes", function(req, res) {
    db.Recipe.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(result) {
      res.json(result);
    });
  });
};
