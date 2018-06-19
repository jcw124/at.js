console.log('04.2 The site controller is loaded!!!');


        const site = require('../models/site.js');
        const events = require('../models/event.js');

        console.log("the Application controller is loading!!!");

        exports.index = function(req, res) {
            res.render('index', {
                layout: 'main'
            });
        };