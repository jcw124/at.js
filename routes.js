console.log('02. The routes.js is loaded!!!');

		const path = require('path');
		const express = require('express');
		const router  = express.Router();

		module.exports = function(app){
			//site's routes (home, )
			const siteRoute = require('./routes/site_route');

			//events
			const eventRoute = require('./routes/event_route');

			//users (in this case admin routes)
			const userRoute = require('./routes/user_route');

			//artists (in this case admin routes)
			const artistRoute = require('./routes/artist');
	
			app.use('/', siteRoute.index);
			app.use('/events', eventRoute);
			app.use('/user', userRoute.login);      
			app.use('/artist', artistRoute);     
			
		};
