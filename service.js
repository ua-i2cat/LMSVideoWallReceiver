//PACKAGES
var express = require('express');
var bodyParser = require('body-parser');
var omxapi = require('./src/omxapi.js');

//VARIABLES
var app = express();
var router = express.Router();

//CONFIGURE APP
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "POST"); //res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
	next();
});

//ROUTES
router.use(function(req, res, next){
	console.log('New incoming request...');
	next();
});

router.route('/')
	.post(function(req, res){
		if(req.body.link){
			omxapi.open(req.body.link);
			res.status(200).send('Open OK');
		} else {
			res.json({error: 'No type or url specific'});
		}
});

// REGISTER OUR ROUTES
app.use('/api', router);

// START THE SERVER
app.listen(8080);
console.log('LMS Video Wall Receiver listening on port ' + 8080);