console.log("04.1 the event controller is loading!!!");

const db = require('../models');

// module.exports.index = serveEvents;


exports.index = function(req, res) {
        
        db.Event.findAll({
        }).then(function(dbEvent) {
                console.log('dbTrip says: ', dbEvent);
                 res.render('event', {layout: 'main_events', event: dbEvent});
        });
}




// function serveEvents(req, res) {
//         console.log('this should console log the console.log');
//         console.log('================= i made it to here================', db.models.events);
        
//         db.models.events.findAll({
//                 attributes: ['eventName']
//         }).then( function (dbEvent) {
//                 console.log('I am here');
//                 console.log(dbEvent);
//                 // res.render('event', {
//                 //         layout: 'main_events'
//                 // });
//         }).catch(function (err) {
//                 console.log('xxxxxxxxxxxxxx', err);
//         })
// };

//console.log('the db.Event: +++++ ', db.models);

//event page
// module.exports ={
//         index: //function(req, res) {res.render('event', {layout: 'main_events'});},
//          function(req, res){
//                  console.log('================= i made it to here================', db.models.events);
//                 db.models.events.findAll({ attributes: ['eventName']
//                 }).then(function(err, dbEvent) {
//                         console.log('I am here');
//                         console.log(dbEvent);
//                         res.render('event', {layout: 'main_events'});
//                 }).catch(function(err){
//                         console.log('xxxxxxxxxxxxxx', err);
//                 })
//         }                   
// };