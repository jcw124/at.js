console.log('03.2 userRoute is loaded!!!');
       
       
        const express = require('express');
        const router  = express.Router();
        const passport  = require('passport');
        const userController = require('../controllers/users_controller');
        const isAuthenticated = require("../config/middleware/isAuthenticated");

        // router.get('/user', userController.login);

        module.exports = router;