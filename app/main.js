(function() {
	requirejs.config({
		baseUrl : 'app/',
		paths : {
			'jquery' : '../libs/jquery-1.10.2'
		},
		urlArgs : "cacheBust=" + (new Date()).getTime(),
	});

	require(['data', 'logger', 'jquery'], function(data,l, $) {
	
		l.info("Data value: "+data.value);
		l.info("Data id: "+data.id);
		
		for (i in data.items){
			l.warn(i+":"+data.items[i]);
		};
		
		$("div.test").each(function(index, el) {
			l.error("Id: "+$(el).attr("id"));
		});

	});
})();
