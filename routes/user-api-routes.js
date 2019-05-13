var db = require("../models");

module.exports = function (app) {
  // Find all Authors and return them to the user with res.json
  app.get("/api/users", function (req, res) {
    db.User.findAll({}).then(function (result) {
      console.log(result);
      res.json(result);
    });
  });

  app.get("/api/users/:id", function (req, res) {
    // Find one Author with the id in req.params.id and return them to the user with res.json
    db.User.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (result) {
      console.log(result);
      res.json(result);
    });
  });

  app.post("/api/users", function (req, res) {
    // Create an Author with the data available to us in req.body
    console.log(req.body);
    db.User.create(req.body).then(function (result) {
      res.json(result);
    });
  });

  app.post("/api/login", function (req, res) {
    // Create an Author with the data available to us in req.body
    console.log("test");
    var name = req.body.name;
    var pass = req.body.pass;
    console.log(name);
    console.log(pass);

    db.User.findOne({
      where: {
        name: name,
        pass: pass
      }
    }).then(function (result) {
      if (result) {
        console.log(result.dataValues);
        res.json(result);
      }
      else {
       
      }
    });

  });
  app.delete("/api/users/:id", function (req, res) {
    // Delete the Author with the id available to us in req.params.id
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (result) {
      res.json(result);
    });
  });

};
