var express = require("express");
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.set('view engine','ejs');

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/node-demo");
var nameSchema = new mongoose.Schema({
    firstName: String,
    lastName: String
});
var User = mongoose.model("User", nameSchema);

app.get("/", (req, res) => {
    
    var allusers;
    User.find({}, function(err, users) {
        //if (err) throw err;
      
        // object of all the users
        //console.log(users);

        //allusers = users[1].firstname; //start from 0
      });

    res.render("../index",
                            {
                                //allusers : allusers
                            });
});

app.post("/addname", (req, res) => {
    var myData = new User(req.body);
    myData.save()
        .then(item => {
            res.send("Name saved to database");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});

app.listen(port, () => {
    console.log("Server listening on port " + port);
    User.find({}, function(err, users) {
        //if (err) throw err;
      
        // object of all the users
        console.log(users[3].firstName);
        console.log(users[0].lastName);
        
        //allusers = users.firstname[1];
      });
});