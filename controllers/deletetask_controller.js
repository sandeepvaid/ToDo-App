const ToDoTask = require('../models/todo_model');

module.exports.deleteTask = function(req,res){
    var keystodeleted = Object.keys(req.body);

    for(let i of keystodeleted){
        ToDoTask.findByIdAndDelete(i,(err)=>{
            console.log("There is an error in deleting the task",err);
            return;
        })

        return res.redirect('back');
    }
    console.log("Am the controller for deleting the task");
    return ;
}