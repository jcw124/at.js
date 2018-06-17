module.exports = function(app){
	//events routing
	// let events_route = require('./routes/event_route');
	// app.use('/events', event_route);

	// //users (in this case admin routes)
	// let users = require('./routes/users');
	// app.use('/users', users);

	// //site's routes
	// let site_routes = require('./routes/site_routes');
	// app.use('/', site_routes);

	//users (in this case admin routes)
	let artist = require('./routes/artist');
	app.use('/artist', artist);
}