//create database ->mydb

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb"; //here is name

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});