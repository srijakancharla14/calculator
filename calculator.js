//jshint esversion:6
const express = require("express");
const bodyParser = require('body-Parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.get("/", function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){
  var num12= Number(req.body.num12);
  var num2= Number(req.body.num2);
  var result= num12+num2;
  res.send("result"+result);
});
app.listen(3000, function(){
  console.log("server is running");
});
