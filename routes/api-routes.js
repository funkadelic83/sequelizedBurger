var db = require("../models");

module.exports = function(app) {

//IF ERROR< TRY SWAPPING app WITH APP AND VICE VERSA

    app.get("/", function (req, res) {
        db.Burger.findAll({}).then(function (results) {
            var hbsObject = {
                burgers: results
            };
            // res.json(results);
            // console.log(hbsObject);
            // res.redirect("/");
            res.render("index", hbsObject);
        })
    });

    app.post("/api/burgers", function (req, res) {
        db.Burger.create({
            burger_name: req.body.burger_name,
            devoured: req.body.devoured
        }).then(function(burgerPost) {
            // console.log(req.body);
            // console.log(burgerPost);
            console.log(`>>>` + JSON.stringify(burgerPost.dataValues))
            res.json(burgerPost.dataValues);
        });
        // function(result) {
            // res.json({ id: result.insertId });
            // res.render("index", hbsObject);
            // };
        });
        
            
        // Template.registerHelper("log", function(something) {
        //     console.log(something);
        //   });
    //UPDATE BURGER

    app.put("/api/burgers:id", function (req, res) {
        db.Burger.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            })
            .then(function (dbBurger) {
                res.json(dbBurger);
            });
    });

}