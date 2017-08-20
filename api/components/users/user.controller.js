var user = require('./user.model.js');

module.exports.save = function(req, res){
  var newUser = new user({
    id: req.body.id,
    alias: req.body.alias,
    name: req.body.name,
    money: req.body.money,
    photo: req.body.photo
  });

  newUser.save(function(err){
    if(err){
      res.json({success:false,msg:'El usuario ya existe.'});
    }else{
      res.json({success:true,msg:'Se ha registrado correctamente.'});
    }
  });
}

module.exports.findAll = function(req,res){
  user.find().then(function(users){
    res.send(users);
  })
};
