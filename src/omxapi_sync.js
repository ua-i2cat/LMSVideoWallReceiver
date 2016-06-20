var exec = require('child_process').exec;
var EventEmitter = require('events').EventEmitter;

var omxapi = function() {

	var that = Object.create(EventEmitter.prototype);

	var openMaster = function(link) {
		var cmd = 'omxplayer-sync-rtsp -mu ' + link;
		console.log(cmd);
		exec(cmd, function(error, stdout, stderr){
			console.log(stdout);
		});
	};

	var openSlave = function(link) {
		var cmd = 'omxplayer-sync-rtsp -lu ' + link;
		console.log(cmd);
		exec(cmd, function(error, stdout, stderr){
			console.log(stdout);
		});
	};

	that.openMaster = openMaster;
	that.openSlave = openSlave;

	return that;
};

module.exports = omxapi();