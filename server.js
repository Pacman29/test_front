"use strict";
const express = require('express');
const parser = require('body-parser');
const app = express();

app.use('/', express.static('public/static', {maxAge: 1}));

app.use(parser.json());
app.use('/libs', express.static('node_modules'));
app.set('views','/public/static/views');

app.get('/singin',function (req,res) {
    res.sendFile(__dirname+'/'+app.get('views')+'/autorization.html');
})

app.listen(process.env.PORT || 5000, function () {
  console.log(`App started on port ${process.env.PORT || 5000}`);
});
