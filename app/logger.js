define('logger', ['jquery'], function($){
	
	var thresholds = ["DEBUG","INFO", "WARN", "ERROR"];
	
	var threshold = "DEBUG";
	
	var debug = function (msg) {
		log(msg, "DEBUG");
	};
	
	var warn = function (msg) {
		log(msg, "WARN");
	};
	
	var error = function (msg) {
		log(msg, "ERROR");
	};
	
	var info = function (msg) {
		log(msg, "INFO");
	};
	
	var log = function (msg, t) {
	
		if (!t) {
			var err =  new Error("Threshold is required");
			console.error("Threshold is required");
			throw err.stack;
		}
		
		if (thresholds.indexOf(threshold) > thresholds.indexOf(t)) {
			return;
		}
		msg = t+": "+msg; 
			
		if (window.console) {
			console.log(msg);
		}
		
		var el = $('<div class="debug_mgs">'+msg+'</div>');
		el.appendTo('#logs');
		
		el.on('click', function(e){
			$(this).hide();
		});
	};
	
	var initModule = function () {
		$('<div id="logs"></div>').appendTo("body");
	    info("Logger has been initialized");
		return {
			debug: debug,
			info: info,
			warn: warn,
			error: error,
		};
	};

	return initModule();

	
});