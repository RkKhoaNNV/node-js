var mysql = require("mysql");
var connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "testapi",
});
module.exports = connection;
