var db = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = function(app) {

    // GET route for getting all of the posts
    app.get("/api/ratings", function(req, res) {
      db.Rating.findAll({
        
      }).then(function(result) {
        res.json(result);
      });
    });
  
    // Get route for retrieving a single post
    app.get("/api/ratings/:id", function(req, res) {
      db.Recipe.findOne({
        where: {
          id: req.params.id
        }
      }).then(function(result) {
        console.log(result);
        res.json(result);
      });
    });
  
    app.get("/api/ratings/omit", function(req, res) {
      var query = {};
      if (req.query.author_id) {
        query.AuthorId = req.query.author_id;
      }
      db.Post.findAll({
        where: query
      }).then(function(result) {
        console.log(JSON.stringify(result));
        res.json(result);
      });
    });
  
    // POST route for saving a new post
    app.post("/api/ratings", function(req, res) {
      console.log(JSON.parse(req.body));
      db.Rating.create(req.body).then(function(result) {
        res.json(result);
      });
    });
  
    // DELETE route for deleting posts
    app.delete("/api/ratings/:id", function(req, res) {
      db.Post.destroy({
        where: {
          id: req.params.id
        }
      }).then(function(result) {
        res.json(result);
      });
    });
  
    // PUT route for updating posts
    app.put("/api/ratings", function(req, res) {
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
  