// Controller setup

// Inside your burger directory, create a folder named controllers.

// In controllers, create the burgers_controller.js file.

// Inside the burgers_controller.js file, import the following:

// Express
// burger.js
// Create the router for the app, and export the router at the end of your file.
var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burgers: data
      };
      res.render("index", hbsObject);
    });
  });
  
  router.post("/api/burgers", function(req, res) {
    burger.create([
      "burger_name", "devoured"
    ], [
      req.body.burger_name, false
    ], function() {
      res.redirect("/burgers") });
    });

  router.post("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    burger.update({
      devoured: req.body.devoured
    }, condition, function(data) {
      res.redirect("/burgers");
    });
  });
  
  module.exports = router;
  