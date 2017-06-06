var express = require('express');
var request = require('superagent');

var app = express();

app.use('/static', express.static('.'))

var PORT = 3000;

app.get('/summarize', function(req, res) {
  request.get(
    "https://api.aylien.com/api/v1/summarize?url=https%3A%2F%2Farstechnica.com%2Fapple%2F2017%2F06%2Fhomepod-is-apples-first-breakthrough-home-speaker&sentences_number=5"
  )
  .set("X-AYLIEN-TextAPI-Application-ID", "17ee3853")
  .set("X-AYLIEN-TextAPI-Application-Key", "715b53a94c039fc008d65ed9f2ec9804")
  .end(function(err, response) {
    res.send(response);
  })

})

app.listen(PORT, function() {
  console.log('listening on port ' + PORT)
})
