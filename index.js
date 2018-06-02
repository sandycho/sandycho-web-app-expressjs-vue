var express = require('express');
var app = express();

var mainRoutes = require('./server/routes/main.js')


app.use('/', mainRoutes);

app.listen(3000, () => console.log('Example app listening on port 3000!'));