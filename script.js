var express = require("express");
var path = require("path");
// var tableData = require('./tableData.js');


var app = express();
var PORT = 3000;

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


app.use(express.static(path.join(__dirname, '../../assets')));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "views/reserve.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "views/table.html"));
});

app.get("/api/tables", function(req, res) {
  return res.json(tableData);
});

// Displays a single character, or returns false
app.get("/api/tables/:tables", function(req, res) {
    var chosen = req.params.table;
  
    console.log(chosen);
  
    for (var i = 0; i < table.length; i++) {
      if (chosen === tables[i].routeName) {
        return res.json(tables[i]);
      }
    }
  
    return res.json(false);
  });
  
  // Create New Characters - takes in JSON input
  app.post("/api/tables", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newTables = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newTables.routeName = newTables.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newTables);
  
    tables.push(newTables);
  
    res.json(newTables);
  });
  
  // Starts the server to begin listening
  // =============================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
