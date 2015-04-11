var app = require("application");
var context = app.android.context;
var vibrator_service = context.getSystemService(context.VIBRATOR_SERVICE);

var vibrator = {
	vibration : function(milliseconds){
		if(vibrator_service.hasVibrator()){
			milliseconds = typeof milliseconds !== 'undefined' ? milliseconds : 500;
			vibrator_service.vibrate(milliseconds);
		}
	}
};

module.exports = vibrator;