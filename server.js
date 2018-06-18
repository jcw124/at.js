//dependencies
const express     = require('express');
const path      = require('path');
const bodyparser  = require('body-parser');
let exhbs       = require('express-handlebars');
const logger    = require('morgan');
//==============================================

//start the server
const app = express();

//define the port
const PORT = process.env.PORT || 8080;

//view the events as happen in development.
//*****remove in production *********
//***********************************
app.use(logger('dev'));
//***********************************

//define data parsing
//for user authentication the extended should be true****
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

//define public folder
app.use(express.static(path.join(__dirname, 'public')));

//favicon ============= 
//********Place the favicon in the public folder and un-comment code below*****
//app.use(favicon(__dirname + '/public/favicon.ico'));


//passport user authentication ===========================
// passport.initialize()
// app.use(require('cookie-parser')());
// app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
// app.use(passport.session());

//end of passport =========================================

// view engine setup
app.set('views', path.join(__dirname, 'views'));

//handlebar defaults
app.engine('handlebars', exhbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//define routing
let routes = require('./routes.js');
app.use(routes);


//==============================================================
require('./routes')(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
// no stacktraces leaked to user unless in development environment
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: (app.get('env') === 'development') ? err : {}
  })
});

module.exports = app;
//==============================================================



//start listening to port 8080
app.listen(PORT, function(){
    console.log('app listening on port: ' + PORT);
});