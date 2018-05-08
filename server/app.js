// import files and packages up here
var data = require("./data.json");

// create your express server below
var express = require("express");
var app = express();

// add your routes and middleware below
var morgan = require("morgan");
app.use(morgan("dev"));

app.get("/", function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end("It's working");
});

app.get("/data", function(req, res) {
    res.send(data);
});

// finally export the express application
module.exports = app;
