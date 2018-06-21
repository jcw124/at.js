console.log('03.1 eventRoute is loaded!!!');
       
       
        const express = require('express');
        const router  = express.Router();
        const passport  = require('passport');
        const eventController = require('../controllers/event_controller');
        const isAuthenticated = require("../config/middleware/isAuthenticated");


        router.get('/events', eventController.index);

        //router.post('/update', isAuthenticated, eventController.eventUpdate);
        //router.post('/update', eventController.eventUpdate);

        //router.post('/new', isAuthenticated, eventController.create);
        
        module.exports = router;