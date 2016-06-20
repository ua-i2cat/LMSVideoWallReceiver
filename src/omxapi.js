var exec = require('child_process').exec;
var EventEmitter = require('events').EventEmitter;

var omxapi = function() {

	var that = Object.create(EventEmitter.prototype);

	var open = function(link) {
		var cmd = 'omxplayer -o hdmi ' + link + ' --streams-sync';
		console.log(cmd);
		exec(cmd, function(error, stdout, stderr){
			console.log(stdout);
		});
	};

	that.open = open;

	return that;
};

module.exports = omxapi();