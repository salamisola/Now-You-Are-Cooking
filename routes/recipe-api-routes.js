// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
// Requiring our models
var db = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the recipes
  app.get("/api/recipes", function (req, res) {
    db.Recipe.findAll({}).then(function (results) {
      res.json(results);
    });
  });

  // Get route for retrieving a single post based on id
  app.get("/api/recipe_id/:id", function (req, res) {
    db.Recipe.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      // console.log(result);
      res.json(result);
    });
  });

  app.get("/api/recipe_title/:title", function (req, res) {
    db.Recipe.findOne({
      where: {
        title: req.params.title
      }
    }).then(function (result) {
      console.log(result);
      res.json(result);
    });
  });

  app.get("/api/recipe_top/top", function (req, res) {
    db.Recipe.findAll({
      where: {
        rating_taste: {
          [Op.gte]: 4,
        }
      },
      order: [
        ['rating_taste', 'DESC'],
        ['rating_ease', 'DESC'],
      ],
      limit: 5
    }).then(function (result) {
      console.log(result);
      res.json(result);
    });
  });

  // POST route for saving a new post
  app.post("/api/recipes"
    , function (req, res) {
      console.log(req.body)
      db.Recipe.create(req.body).then(function (result) {
        res.json(result);
      });
    });


    app.get("/api/recipe_ingred/:num_ing", function (req, res) {
      db.Recipe.findAll({
        where: {
          num_ing: req.params.num_ing
        }
      }).then(function (result) {
        console.log(result);
        res.json(result);
      });
    });
  
    app.get("/api/recipe_time/:time", function (req, res) {
      db.Recipe.findAll({
        where: {
          time: req.params.time
        }
      }).then(function (result) {
        console.log(result);
        res.json(result);
      });
    });
  
    app.get("/api/recipe_ease/:rating_ease", function (req, res) {
      db.Recipe.findAll({
        where: {
          rating_ease: req.params.rating_ease
        }
      }).then(function (result) {
        console.log(result);
        res.json(result);
      });
    });
  
    app.get("/api/recipe_taste/:rating_taste", function (req, res) {
      db.Recipe.findAll({
        where: {
          rating_taste: req.params.rating_taste
        }
      }).then(function (result) {
        console.log(result);
        res.json(result);
      });
    });
  
  }
