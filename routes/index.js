const express = require('express');
//use express router
const router = express.Router();
console.log("router is loading!!");
//import the home controller
const home = require('../controllers/home_controller');
//import the addTask controller
const addtask = require('../controllers/addtask_controller');
//import the delete task controller
const deletetask = require('../controllers/deletetask_controller');
//THis request is for the home page
router.get('/',home.home);
//Handles the adding task to database
router.post('/add-todo',addtask.addTask);
//Handles the delete task from database
router.post('/delete-todo',deletetask.deleteTask);
module.exports = router;