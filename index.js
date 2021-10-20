const express = require("express");
const port = 8000;

const app = express();





app.listen(port,(err)=>{
    if(err){
        console.log(`There is an error on port number :- ${port}`);
        return;
    }

    console.log(`Server is up and running on port number ${port}`);

});