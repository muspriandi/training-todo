var express = require("express");
const { func } = require("prop-types");

var app = express();
var todoList = require('./json/GET.json');


app.get('/getTodoList', (req,res) => {
    return res.json(todoList);
});

app.listen(3001, function (){
    console.log("Server running at port : 3001");
});
