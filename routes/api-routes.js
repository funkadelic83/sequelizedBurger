var db = require("../models");

module.exports = function(app) {

//IF ERROR< TRY SWAPPING app WITH APP AND VICE VERSA

    app.get("/burgers/create", function (req, res) {
        db.Burger.findAll({}).then(function (results) {
            res.json(results);
            res.redirect("/");
        })
    });

    app.post("/burgers/create", function (req, res) {
        db.Burger.create({
            burger_name: req.body.burger_name,
            devoured: req.body.devoured
        })
            .then(function (dbBurger) {
                console.log(dbBurger);
                res.redirect("/");
            });
    });

    //UPDATE BURGER

    app.put("/burgers/create", function (req, res) {
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