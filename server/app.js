// import files and packages up here
var express = require("express");
var morgan = require("morgan");
var data = require("./data.json");
var path = require("path");

// create your express server below
var app = express();

var directory = path.join(__dirname, "public");
console.log(__dirname);
// add your routes and middleware below
app.use(morgan("dev"));
app.use("/", express.static(directory));

app.get("/", function(request, response) {
    response.sendStatus(200);
});


app.get("/data" ,function(request, response) {
    response.status(200).json(data);
    // response.setHeader("Content-Type", "application/json");
    // response.sendFile(__dirname + "/data.json");
});

// finally export the express application
module.exports = app;