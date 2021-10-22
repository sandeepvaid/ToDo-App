const express = require("express");
const port = 8000;

const app = express();

//Set up the mongoose database
const db = require("./config/mongoose");

//importing the collection
const ToDOList = require('./models/todo_model');

app.use(express.urlencoded());
//use express router
app.use('/',require('./routes'));

//set up template engine
app.set('view engine','ejs');
app.set('views','./views');

//Adding static files to the project
app.use(express.static("assets"));


app.listen(port,(err)=>{
    if(err){
        console.log(`There is an error on port number :- ${port}`);
        return;
    }

    console.log(`Server is up and running on port number ${port}`);

});