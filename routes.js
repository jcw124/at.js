module.exports = function(app){
	//events routing
	var events_route = require('./routes/events_route');
	app.use('/events', events_route);

	//users (in this case admin routes)
	var users = require('./routes/users');
	app.use('/users', users);

	//site's routes
	var site_routes = require('./routes/site_routes');
	app.use('/', site_routes);
}