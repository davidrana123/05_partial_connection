const path = require('path');
const express = require('express');
 const app = express();
 const port = 8000;

//relative absolute
 //console.log(__dirname);
//console.log(path.join(__dirname,"../02_public"));

const staticPath = path.join(__dirname,"../02_public");

//to set the view Engines

app.set("view engine" , "hbs");

//builtin middeware
//app.use(express.static(staticPath));


//template engine route
app.get("/", (req,res) => {
    res.render("index.hbs" , {
        linkname: "david",
    });
});

 app.get("/",(req,res) => {
     res.send("hellow to the express by david");
 });



 app.listen(port ,() => {
     console.log(`listing to the port num ${port}`)
 });