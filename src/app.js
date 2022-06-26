const { default: chalk } = require("chalk");
const express = require("express");
const path = require('path');
const hbs = require('hbs');

const app = express();

const pathPartials = path.join(__dirname,'../views/partials');
app.use(express.static(path.join(__dirname,'../public')))
app.set('view engine' , 'hbs');
app.set('views' , path.join(__dirname,'../views'));
hbs.registerPartials(pathPartials);


app.get('/',(req , res)=>{
    res.render('index',{
        title:"Home Page of website",
        head : "Welcome to Home Page"
    });
})

app.get('/about',(req , res)=>{
    res.render('about',{
        title :"About Page",
        head : "welcome to about page"

    });
});


app.get('/help',(req , res)=>{
    res.render('help');
})

app.get('/products',(req , res)=>{
    if(!req.query.name){
        res.send({
            error : "plz enter your name."
        });
    }
    console.log(req.query);
    res.render('product/index');
})

app.get('*',(req , res)=>{
    res.render('error',{
        title : '404',
        message : 'Page not Found'
    })
})


app.listen(3000 , ()=>{
    console.log(chalk.green('server is running on port 3000....'))
});