// Attempting to sew together handlebars and sequelize

// Requiring our Burger model
const db = require("../models");


module.exports = function (app) {

    // Serve default view
    app.get("/", function (req, res) {
        // findAll returns all entries for a table when used with no options
        db.Burger.findAll({}).then(function (dbBurger) {
            // We have access to the burgers as an argument inside of the callback function
            res.render("index", {
                burgers: dbBurger
            });
        });
    });

    // Serve json output of db
    app.get("/api/v1/burgers", function (req, res) {
        // findAll returns all entries for a table when used with no options
        db.Burger.findAll({}).then(function (dbBurger) {
            // We have access to the burgers as an argument inside of the callback function
            res.json(dbBurger);
        });
    });

    // Routing for posting
    app.post("/api/v1/burgers", function (req, res) {
        db.Burger.create({
            burger_name: req.body.burger_name,
            devoured: false
        }).then(function (dbBurger) {
            // We have access to the burgers as an argument inside of the callback function
            res.render("index", {
                burgers: dbBurger
            });
        });
    });

    // Routing for updating
    app.put("/api/v1/burgers", function (req, res) {
        // Update takes in two arguments, an object describing the properties we want to update,
        // and another "where" object describing the burgers we want to update
        db.Burger.update({
            devoured: true
        }, {
            where: {
                id: req.body.id
            }
        }).then(function (dbBurger) {
            // We have access to the burgers as an argument inside of the callback function
            res.render("index", {
                burgers: dbBurger
            });
        });
    });

};