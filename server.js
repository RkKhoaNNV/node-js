var express = require("express");
var bodyParser = require("body-parser");
var morgan = require("morgan");

var connection = require("./Dbconnection");
var routes = require("./routes");

var app = express();
app.use(bodyParser.urlencoded({ extended: true })); //support x-www-form-urlencoded
app.use(bodyParser.json());
app.use(morgan("combined"));

app.use("/sinhvien", routes);

var server = app.listen(3000, function () {
  console.log("Server listening on port " + server.address().port);
});

module.exports = app;
