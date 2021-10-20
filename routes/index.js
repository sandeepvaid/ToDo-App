const express = require('express');
//use express router
const router = express.Router();
console.log("router is loading!!");
//import the home controller
const home = require('../controllers/home_controller');

router.get('/',home.home);

module.exports = router;