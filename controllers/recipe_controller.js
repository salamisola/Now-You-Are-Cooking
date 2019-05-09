var express = require("express");
var burger = require("../models/recipe.js");

var router = express.Router();

//get router
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        //hdbrsObj is the handlebars obj
        var hdbrsObj = {
            recipes: data
        };
        console.log(hdbrsObj);
        res.render("index", hdbrsObj);
    });

    //post router
    router.post("/api/recipes", function (req, res) {
        recipe.insertOne(
            ["name", "action"],
            [req.body.name, req.body.action],
            function (result) {
                // Send back the ID of new burger
                res.json({ id: result.insertId });
            }
        );
    });

    //put router
    router.put("/api/recipes/:id", function (req, res) {
        var condition = "id = " + req.params.id;

        console.log("condition", condition);
        recipe.updateOne({ action: req.body.action }, condition, function (
            result
        ) {
            if (result.changedRows === 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
    });

    //delete router
    router.delete("/api/recipes/:id", function (req, res) {
        var condition = "id = " + req.params.id;
        console.log("condition", condition);

        recipe.deleteOne(condition, function (result) {
            if (result.changedRows === 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
    });
});
module.exports = router;




