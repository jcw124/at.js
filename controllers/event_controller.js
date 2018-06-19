console.log("04.1 the event controller is loading!!!");

        const db  = require('../models');
        const exhbs         = require('express-handlebars');

        //event page
        module.exports ={
                events: function(req, res) {
                        res.render('event', {layout: 'main_events'});
                }
            }
          


        // exports.events = function(req, res){

        // db.events.findAll({
        //         where: {
        //         eventsId: req.events.id,
        //         eventName: req.events.eventName
        //         }
        // }).then(function(Event) {
        // console.log(dbEvents);
        //         res.render('events/event', {
        //         layout: 'main_events',
        //         events: Event
        //         });
        // });
        // };
        /*
//================================================================
        exports.update = function (req, res) {
        event.update(req.body.event_id, function (result) {
            res.redirect("/events");
        });
        };

        exports.create = function (req, res) {
                console.log(req.user);
        // Add id from User onto req.body
        req.body.UserId = req.user.id;
      
        db.events.create(req.body.event_name).then(function(dbPost) {
                res.json(dbPost);
                res.redirect("/events");
                });
        };
        */