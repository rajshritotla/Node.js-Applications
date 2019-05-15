var express = require('express');
var session= require('express-session');
var app = express();

app.set('view engine','ejs');
app.set('views', __dirname + '/views');

app.use(
    session({
        secret: 'ssshhhhh',
        resave: true,
        saveUninitialized: true
    })
);

var sess;

app.post('/login',function(req,res){
    sess = req.session;
    //In this we are assigning email to sess.email variable.
    //email comes from HTML page.
    sess.email=req.params.email;
    res.end('done');
});

app.get('/',function(req,res){
    sess = req.session;
    //Session set when user Request our app via URL
    if(sess.email) {
    /*
    * This line check Session existence.
    * If it existed will do some action.
    */
        res.redirect('/niceburger');
    }
    else {
        res.render('login');
    }
});


app.get('/niceburger',function(req,res){
    
    res.render('niceburger',{      
    });
   
   });


app.get('/checkout',function(req,res){

    var total= req.query.total;
    res.render('checkout',{        
          total : total
    });

});

app.get('/logout',function(req,res){
    req.session.destroy(function(err) {
      if(err) {
        console.log(err);
      } else {
        res.redirect('/');
      }
    });
    
});


/*
    //Destroys session
    
    session.destroy(err => {});

*/

app.listen(8080);
console.log('8080 is on work for node');

