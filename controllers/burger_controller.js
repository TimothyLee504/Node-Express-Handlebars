var express = require("express");
var router = express.Router();
var burger = require("../models/burger");

//will use get, post, pull, and delete.
//get to retrieve from db,
//post to insert,
//put to update,
//and delete to delete burgers.

router.get("/", function (req, res) {
  burger.all(function (data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burger", function (req, res) {
  burger.create([req.body.id], function (result) {

    // Send back the ID of the new quote
    res.json({
      id: result.insertId
    });
  });
});

router.put("/api/burger/:id", function (req, res) {
  var id = "id = " + req.params.id;

  console.log(id);

  burger.update(id, 
    function (result) {
      if (result.changedRows === 0) {
        console.log("not working in controller");
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      console.log("working in controller");
      res.status(200).end();

    }
  );

  // router.delete("/api/burger/:id", function(req, res){
  //   var id = req.param.id;
  //   burg.delete({

  //   })
  // })
});



// Export routes for server.js to use.
module.exports = router;