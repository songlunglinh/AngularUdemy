var express = require('express');
var app = express();
var port = 3000;
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/'));

app.all('/*', function (req, res) {
  res.redirect('app/index.html');
});

app.listen(port);
console.log("Angular App Server listening at http://localhost:" + port);
