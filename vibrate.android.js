var app = require("application");

var vibrator = {
	vibration : function(milliseconds){
		if(!this.vibrator_service){
			this.vibrator_service = app.android.context.getSystemService(android.content.Context.VIBRATOR_SERVICE);
		}
		if(this.vibrator_service.hasVibrator()){
			milliseconds = typeof milliseconds !== 'undefined' ? milliseconds : 500;
			this.vibrator_service.vibrate(milliseconds);
		}
	}
};

module.exports = vibrator;
