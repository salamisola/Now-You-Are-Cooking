var orm = require("../config/orm.js");

// create a variable called recipe that stores all the callbacks for our ORMs
var recipe = {
  selectAll: function (cb) {
    orm.selectAll("recipes", function (res) {
      cb(res);
    });
  },

  insertOne: function (cols, vals, cb) {
    orm.insertOne("recipes", cols, vals, function (res) {
      cb(res);
    });
  },

  updateOne: function (objColVals, condition, cb) {
    orm.updateOne("recipes", objColVals, condition, function (res) {
      cb(res);
    });
  },
  /*};*/

  deleteone: function (condition, cb) {
    orm.deleteOne("recipes", condition, function (res) {
      cb(res);
    });
  }
};

module.exports = recipe;


