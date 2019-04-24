// var express = require("express");
// var router = express.Router();
// var burger = require("../models/burger.js");

//THIS FILE IS BASICALLY API-ROUTES

var db = require("../models");

module.exports = function (app) {

    //SHOW ALL BURGERS
    app.get("/api/burgers", function (req, res) {
        db.Burger.findAll({}).then(function (results) {
            res.json(results);
        })
    });

    //ADD A NEW BURGER
    app.post("/api/burgers", function (req, res) {
        console.log(req.body);
        db.Burger.create(req.body)
            .then(function (results) {
                res.json(results);
            });
    });

    //UPDATE BURGER
    app.put("/api/burgers", function (req, res) {
        console.log(req.body);
        db.Burger.update({
            burger_name: req.body.burger_name,
            devoured: req.body.devoured
        }, {
                where: {
                    id: req.body.id
                }
            })
            .then(function (response) {
                res.json(response);
            });
    });



} // THIS SHOULD BE WHERE THE MODULE.EXPORTS FUNCTION ENDS

// ALL THIS IS OLD
// router.get("/", function (req, res) {
//     burger.selectAll(function (data) {
//         var hbsObject = {
//             burgers: data
//         };
//         console.log(hbsObject);
//         res.render("index", hbsObject);
//     });
// });

// router.post("/api/burgers", function (req, res) {
//     burger.insertOne([
//         "burger_name", "devoured"
//     ], [
//             req.body.burger_name, req.body.devoured
//         ], function (result) {
//             res.json({ id: result.insertId });
//         });
// });

// router.put("/api/burgers/:id", function (req, res) {
//     var condition = "id = " + req.params.id;

//     console.log("condition", condition);

//     burger.updateOne({
//         devoured: req.body.devoured
//     }, condition, function (result) {
//         if (result.changedRows == 0) {
//             return res.status(404).end();
//         } else {
//             res.status(200).end();
//         }
//     });
// });

// module.exports = router;