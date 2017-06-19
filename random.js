const express = require('express');
const app = express();
var loremIpsum = require('lorem-ipsum')

app.get('/', function (req, res) {
	const lorem1 = loremIpsum({units: 'paragraphs'});
	const lorem2 = loremIpsum({units: 'paragraphs'});
	const lorem3 = loremIpsum({units: 'paragraphs'});
  res.send('<html><body>' + '<p>' + lorem1 + '</p>' + '<p>' + lorem2 + '</p>' + '<p>' + lorem3 + '</p>' + '</body></html>');
});

app.get('/lorem/:num', function (req, res) {
var finalString = '<html><body>';
var loremLoop = function(){
	for (i = 0; i < req.params.num; i++) { 
    var loremTemp = loremIpsum({units: 'paragraphs'});
    finalString = finalString + '<p>' + loremTemp + '</p>';
	}
	finalString = finalString + '</body></html>';
}
loremLoop();
res.send(finalString);
});

app.listen(3000, function () {
  console.log('Successfully started express application!')
});