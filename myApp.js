let express = require('express');
let app = express();

console.log("Hello world");

app.get("/",function(req,res){
    res.send("You are welcome");
})








 module.exports = app;
