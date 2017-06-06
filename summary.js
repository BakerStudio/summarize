

function callback(data) {
	console.log(data);
	console.log("in callback");
}

$(function() {
  'use strict';

	$.ajax({
    url: "http://localhost:3000/summarize",
    headers: {"X-AYLIEN-TextAPI-Application-Key": "715b53a94c039fc008d65ed9f2ec9804",
    					"X-AYLIEN-TextAPI-Application-ID": "17ee3853" },
    success: callback
    }).fail(function(data) {
    	console.log("ajax error");
    	alert(data);
		});
})
