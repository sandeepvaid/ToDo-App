const express = require("express");
const port = 8000;

const app = express();

//Set up the mongoose database
const db = require("./config/mongoose");

//use express router
app.use('/',require('./routes'));

//set up template engine
app.set('view engine','ejs');
app.set('views','./views');



app.listen(port,(err)=>{
    if(err){
        console.log(`There is an error on port number :- ${port}`);
        return;
    }

    console.log(`Server is up and running on port number ${port}`);

});