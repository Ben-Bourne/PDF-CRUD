//server/routes/routes.js
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var PDF = require('./models/PDF');

router.get('/', function(req, res){
    res.render('index')
});

//CRUD ROUTES

module.exports = router;
