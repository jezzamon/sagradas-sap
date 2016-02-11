//set up modules
var express = require('express');
var app = express();
var router = express.Router();
var morgan = require('morgan');					//log to console
var bodyParser = require('body-parser');			// pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var localjson = require('./db.json');			//load local json file

//configuration
app.use(express.static(__dirname + '/dist')); //set relative directory static files css, html, imgs
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());


//routes


app.get('/dishes', function(req,res) {
	res.json(localjson.dishes);	
	});

app.get('/promotions', function(req,res) {
	res.json(localjson.promotions);	
	});

app.get('/leadership', function(req,res) {
	res.json(localjson.leadership);	
	});

app.get('/feedback', function(req,res) {
	res.json(localjson.feedback);	
	});

app.get('*', function(request, response) {
	response.sendFile('index.html', {root: __dirname + '/dist/'});  //load the single view file, angular will handle front end stuff
});

// listen (start app)
var port = process.env.PORT || 8090;
app.listen(port);
console.log('App listening on port ' + port);
