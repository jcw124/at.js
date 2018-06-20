console.log('02. The routes.js is loaded!!!');

module.exports = function(app){

     //	const path = require('path');
		//const express = require('express');
					
		//site's routes (home, )
		const siteRoute = require('./routes/site_route');

		//events
		const eventRoute = require('./routes/event_route');

		//users (in this case admin routes)
		const userRoute = require('./routes/user_route');

		// artists
		const artistRoute = require('./routes/artist')

		app.use('/', siteRoute);
	    app.use('/events', eventRoute);
		app.use('/user', userRoute); 
		app.use('/artist', artistRoute);      

}
	//module.exports = router;
