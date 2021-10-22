const ToDoTask = require('../models/todo_model');


module.exports.addTask = function(req,res){

    console.log(req.body.selectpicker);
    ToDoTask.create({
        description:req.body.description,
        category:req.body.selectpicker,
        due_date:req.body.due_date
    },function(err,newTodo){

        if(err){
            console.log(`There is some error ${err} in adding the task to database `);
            return;
        }

        console.log('The date is adding successfully to the database and task is created');
        return res.redirect('back');

    })
   
};