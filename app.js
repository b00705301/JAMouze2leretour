var express = require('express');
var app = express();
app.use(express.static("jam2"));
app.listen(4242);