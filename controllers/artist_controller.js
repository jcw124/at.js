//Artist controller file
let express = require("express");
let router = express.Router();
let db =  require("../models/artist.js");

// Create all our routes and set up logic within those routes where required.
router.get("/artist", function(req, res) {
    db.artist.all(function(data) {
      var hbsObject = {
        artist: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  router.post("/artist/admin/", function(req, res) {
    db.artist.create([
      "groupName", "contactName","contactEmail","contactPhone","personalWebsite","instagramLink"
    ], [
      req.body.groupName, req.body.contactName,  req.body.contactEmail,  req.body.contactPhone, req.body.website,  req.body.email
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/artist/admin/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    artist.update({
      sleepy: req.body.sleepy
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  
  router.delete("/artist/admin/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    cat.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  
  // Export routes for server.js to use.
  module.exports = router;
  

