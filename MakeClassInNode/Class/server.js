var express = require('express');
const app = express();

app.set('view engine','ejs');

class firstClass{
    
   
    constructor(name,last){
        this.name = name;
        this.last = last;
    }

    show(){
        
        console.log(this.name);
        console.log(this.last);
        console.log("first class called");
    }

    forname(){
        return this.name;
    }

}

var fc = new firstClass("rajshri","totla");

app.get('/', function(req, res) {
    
    console.log("in func");
    var name = fc.forname();
    var last = fc.last;
   // console.log(fc.show().name);
    res.render('../index', {
        name: name,
        last: last
    });
});

app.listen(8000, () => {
    //fc.show();
    //console.log(fc.forname());
    //console.log(fc.last);
    console.log("Server listening on port 8000");
});