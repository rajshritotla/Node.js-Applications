var express = require('express');
var app = express();
app.set('view engine','ejs');

app.use(express.static('public'));

var fs = require("fs");
var jsonContent = JSON.parse(fs.readFileSync("data.json"));

app.get('/',function(req,res){

    var guitars= new Array();    

    Object.keys(jsonContent).forEach(function(element) 
    {   
        guitars.push(
            {
                id : jsonContent[element].id,
                name : jsonContent[element].name, 
                price : jsonContent[element].price, 
                image : jsonContent[element].image, 
                description : jsonContent[element].description 
            }
        )
    });


    res.render('crazyzaks/index',{
        guitars:guitars
    });

});


app.get('/guitar_desc',function(req,res){

    var gid= req.query.id;
    var required_guitar;

    Object.keys(jsonContent).forEach(function(element) 
    {   
        if(jsonContent[element].id==gid){
            required_guitar=
                {
                    name : jsonContent[element].name, 
                    price : jsonContent[element].price, 
                    image : jsonContent[element].image, 
                    description : jsonContent[element].description 
                }
        }
    });

    res.render('crazyzaks/guitar_desc',{
        required_guitar : required_guitar
    });

});


var add_guitar= new Array();

app.get('/cart',function(req,res){
    var gid= req.query.id;
    Object.keys(jsonContent).forEach(function(element) 
        {   
            if(jsonContent[element].id==gid && add_guitar[element]!=gid){
                {
                    add_guitar.push(
                        {
                            name : jsonContent[element].name, 
                            price : jsonContent[element].price, 
                            image : jsonContent[element].image
                        }
                    )
                }
                
            }
           });

           res.render('crazyzaks/cart',{
                add_guitar : add_guitar
        });
});


app.get('/checkout',function(req,res){

    res.render('crazyzaks/checkout',{
        
    });
});

app.listen(8080);
console.log('8080 is on work for node');

  