var express = require('express');
var	router = express.Router();
var userController = require('./property.controller.js');

//Para las rutas con id
router.param('id',function(req, res, next, id){
  req.body.id = id;
  next();
});

router.route('/get_all_properties')
  .get(function(req, res){
      userController.findAll(req,res);
  });

module.exports = router;
