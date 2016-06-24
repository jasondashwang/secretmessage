var express = require('express');

var app = new express();

app.get('/', function (req, res, next){
  res.send('Hi');
});


app.listen(3000, function(){
  console.log('Server is running on port 3000');
});
