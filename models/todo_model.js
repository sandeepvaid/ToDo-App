//import the mongoose
const mongoose = require('mongoose');

//Create schema and define fields in it
const ToDoSchema = new mongoose.Schema({

    description:{
        type:String,
        required:true
    },

    category:{
        type:String,
        required:true
    },
    due_date:{
        type:String,
        required:true
    }
});


//Give name to our collection
const ToDoList = mongoose.model('ToDoList',ToDoSchema);

//Now we make our collection to be exported so that we can access it
module.exports = ToDoList;