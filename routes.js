console.log('02. The routes.js is loaded!!!');

		const path = require('path');
		const express = require('express');
		const router  = express.Router();

		const siteRoute = require('./routes/site_route');

		//events
		const eventRoute = require('./routes/event_route');

		//users (in this case admin routes)
		const userRoute = require('./routes/user_route');

		
		router.get('/', siteRoute);
		router.get('/events', eventRoute);
		router.get('/user', userRoute);           

		
	module.exports = router;