//Import the database
const ToDoTask = require('../models/todo_model');
module.exports.home = function(req,res){

    ToDoTask.find({},(err,todoTask)=>{
        if(err){
            console.log(`Hey am the home controller and am not able to fetch data from the database due to ${err} `);
            return;
        }

        return res.render('home',{
            title:'ToDo App',
            todo:todoTask
        });

});

   
};