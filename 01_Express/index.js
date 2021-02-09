const path = require('path');
const express = require('express');
 const app = express();

//relative absolute
 //console.log(__dirname);

//console.log(path.join(__dirname,"../02_public"));

const staticPath = path.join(__dirname,"../02_public");

//builtin middeware
app.use(express.static(staticPath));

 app.get("/",(req,res) => {
     res.send("hellow to the express by david");
 });

 app.get("/about",(req,res) => {
     res.send("you are in abiut us");
 })

 app.listen(8000 ,() => {
     console.log("listing to the port num 8000")
 });