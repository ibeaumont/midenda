//ejecutar en consola 
//heroku config:set MONGOHQ_URL="mongodb://zubiri:zubiri@troup.mongohq.com:10013/prueba"
//modificar: server.listen(process.env.PORT

var express  = require("express"),
    app      = express(),
    http     = require("http"),
    server   = http.createServer(app),
    mongoose = require('mongoose'),
    path = require( 'path' ),
    application_root = __dirname;
    
   
app.configure(function () {
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
});

//app.get('/', function(req, res) {
 // res.send("Hello world!");
//});

//fin prueba index.html

routes = require('./routes/productos')(app);

  //Where to serve static content
 app.use( express.static( path.join( application_root, 'site') ) );



mongoose.connect('mongodb://zubiri:zubiri@troup.mongohq.com:10013/prueba', function(err, res) {
	if(err) {
		console.log('ERROR: connecting to Database. ' + err);
	} else {
		console.log('Connected to Database');
	}
});

server.listen(process.env.PORT, function() {
  console.log("Node server running on http://localhost:3000");
});