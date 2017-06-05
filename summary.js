

function callback(data) {
	console.log("in callback");
	debugger;
}

$(function() {
  'use strict';

	$.ajax({
		dataType: "jsonp",
    url: "https://api.aylien.com/api/v1/summarize?url=https%3A%2F%2Farstechnica.com%2Fapple%2F2017%2F06%2Fhomepod-is-apples-first-breakthrough-home-speaker&sentences_number=5",
    headers: {"X-AYLIEN-TextAPI-Application-Key": "715b53a94c039fc008d65ed9f2ec9804",
    					"X-AYLIEN-TextAPI-Application-ID": "17ee3853" },
    success: callback
    }).fail(function(data) { 
    	console.log("ajax error");
    	alert(data);
		});
})	 
