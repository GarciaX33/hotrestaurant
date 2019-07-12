// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Variable that will hold the data (DATA)
// =============================================================
var tables = [
    {
        routeName: "tableone",
        name: "table1",
        user: "Daniel",
        phone: 900,
        email: "email@gmail.com"
    },
    {
        routeName: "tabletwo",
        name: "table2",
        user: "Bri",
        phone: 200,
        email: "email@gmail.com"
    },
    {
        routeName: "tablethree",
        name: "table3",
        user: "CJ",
        phone: 55,
        email: "email@gmail.com"
    },
    {
        routeName: "tablefour",
        name: "table4",
        user: "Brooke",
        phone: 200,
        email: "email@gmail.com"
    },
    {
        routeName: "tablefive",
        name: "table5",
        user: "name5",
        phone: 200,
        email: "email@gmail.com"
    },
];

var waitlist = [
    {
        routeName: "tablesix",
        name: "table6",
        user: "name6",
        phone: 900,
        email: "email@gmail.com"
    }

];