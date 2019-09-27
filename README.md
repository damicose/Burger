# EAT-DA-BURGER App

## Function
This app is designed to present a list of burgers that are submitted by the user (and/or seeded) which can be virtually devoured. 

Primary purpose for creation is gaining experience with using .handlebars templating, Sequelize, and express servers.

## Organization

This app's structure was intended to be MVC design compliant

Additionally there is a dummy .sql schema with several 'products' that is the foundation for the actual mySQL database.

## Directions

The user is presented with an input for a burger they wish to devour. Once submitted, this burger will appear on screen. This action may be repeated to have several different burgers on screen.

The user may then click the "DEVOUR" button generated next to each burger to move it from the left side of the screen to the right side.

(Currently working on getting this functional! Issue during development where Sequelize is adding unwanted columns and causing crash--see screenshot)

## Screenshots

Schema as directed and unwanted ghost columns (createdAt, updatedAt):
![Bug1](https://github.com/damicose/Burger/blob/master/public/assets/img/Unwanted%20Columns.jpg?raw=true)

## Technologies

* Javascript
* Node
    * Sequelize module
    * mySQL module
    * express-handlebars

* SQL
    * MySQL Workbench
    * MAMP

## My Role

Guide for the overall structure of the app was provided by Coding Boot Camp Instructor. All development and coding beyond that were done by yours truly. 