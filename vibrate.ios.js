var vibrator = {
	vibration : function(milliseconds){
		AudioServicesPlaySystemSound(kSystemSoundID_Vibrate);
	}
};

module.exports = vibrator;