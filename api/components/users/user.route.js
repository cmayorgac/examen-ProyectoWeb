var express = require('express');
var	router = express.Router();
var userController = require('./user.controller.js');

//Decalaracion de las rutas
router.route('/users')
  .post(function(req, res){
    console.log('entre en server');
    userController.save(req, res);
  });
