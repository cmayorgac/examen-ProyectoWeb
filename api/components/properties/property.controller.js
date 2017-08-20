var property = require('./property.model.js');

module.exports.findAll = function(req,res){
  property.find().then(function(properties){
    res.send(properties);
  })
};
