console.log('03.2 userRoute is loaded!!!');

const express = require('express');
const router  = express.Router();
const userController = require('../controllers/user_controller');


//admin page
router.get('/abbass', userController.index);


module.exports = router;