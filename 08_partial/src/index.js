const path = require('path');
const express = require('express');
 const app = express();
 const hbs = require("hbs");
 const fs = require("fs");
 const port = 8000;

//abb views folder

app.set('views',path.join(__dirname,'../templates/views'))

//set hbs engine
app.set('view engine','hbs')

//add views another folder
hbs.registerPartials(path.join(__dirname,'../templates/partials'));


//template engine route
app.get("/", (req,res) => {
    res.render('index');
});

app.get("/about",(req,res) => {
    res.render("about");
})

 app.get("/",(req,res) => {
     res.send("hellow to the express by david");
 });



 app.listen(port ,() => {
     console.log(`listing to the port num ${port}`)
 });