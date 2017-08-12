var User = require('./user.model.js');

model.exports.save = function(req, res){
  var newUser = new User({
    id: req.body.id,
    alias: req.body.alias,
    name: req.body.name,
    money: req.body.money,
    photo: req.body.photo
  });

  newUser.save(function(err){
    if(err){
      res.json({success:false,msg:'El correo electrónico ya existe.'});
    }else{
      res.json({success:true,msg:'Se ha registrado correctamente.'});
    }
    });

}
