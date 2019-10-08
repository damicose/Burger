// Nabbed from 15-4, working on parsing jquery >__>

// Do I need?? 

// Yes 

const db = require("../models");


$(document).ready(function () {
    // Getting references to the burger name input (need?)
    const nameInput = $("#burgName");

    function handleBurgerFormSubmit() {
        app.post("/", function (req, res) {
            db.Burger.create({
                burger_name: nameInput.value,
                devoured: false
            }).then(function (dbBurger) {
                // We have access to the burgers as an argument inside of the callback function
                res.render("index", {
                    burgers: dbBurger
                });
            });
        });
        console.log(nameInput.value);
        serveBurgs();
    };

    function handleDevourButtonPress() {
        app.put("/", function (req, res) {
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
        console.log(req.body.id);
        serveBurgs();
    };

    function serveBurgs() {
        app.get("/", function (req, res) {
            // findAll returns all entries for a table when used with no options
            db.Burger.findAll({}).then(function (dbBurger) {
                // We have access to the burgers as an argument inside of the callback function
                res.render("index", {
                    burgers: dbBurger
                });
            });
        });
    };

    $(document).on("submit", "#burgSubmit", handleBurgerFormSubmit);
    $(document).on("click", ".eatburger", handleDevourButtonPress);

    serveBurgs();

});