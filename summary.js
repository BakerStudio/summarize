

function callback(data) {
	console.log(data);
	console.log("in callback");
}

$(function() {
	'use strict';

	var uri = 'https://www.washingtonpost.com/world/after-british-vote-brexit-negotiations-could-be-delayed/2017/06/09/1a2fee88-4c9b-11e7-987c-42ab5745db2e_story.html';
	var res = encodeURIComponent(uri);

	$.ajax({
		url: 'http://localhost:3000/summarize?url=https%3A%2F%2Fwww.wsj.com%2Farticles%2Fu-k-s-theresa-may-looks-to-smaller-party-to-form-government-1497003906&sentences_number=5',
		headers: {'X-AYLIEN-TextAPI-Application-Key': '715b53a94c039fc008d65ed9f2ec9804',
			'X-AYLIEN-TextAPI-Application-ID': '17ee3853' },
		success: callback
	}).fail(function(data) {
		console.log("ajax error");
		alert(data);
	});
});
