(function (){
  angular
  .module('app')
  .service('userService', userService);

  function userService(){
    var user = [
      {
        id: 001,
        name:'Goku',
        alias: 'Kokkun',
        money: 1500,
        photo:'https://res.cloudinary.com/pabskun/image/upload/v1489535279/goku_cqc9tb.png'
      },
      {
        id: 002,
        name:'Piccolo',
        alias: 'PikOREO',
        money: 1500,
      photo:'https://res.cloudinary.com/pabskun/image/upload/v1489535276/piccolo_ksxdec.png'
      },
      {
        id: 003,
        name:'Logan',
        alias: 'Lovezno',
        money: 1500,
        photo:'https://res.cloudinary.com/pabskun/image/upload/v1489535284/lobezno_o1vs9g.png'
      },
      {

        id: 004,
        name:'Bomberman',
        alias: 'Don Pepe y los Globos',
        money: 1500,
        photo:'https://res.cloudinary.com/pabskun/image/upload/v1489535282/donpepe_x9hksw.png'
      }
    ];
    var publicAPI = {
      setUser: _setUser,
      getUser: _getUser
    };
    return publicAPI;
    // guardar
    function _setUser(newUser){
      var userList = _getUser();
      userList.push(newUser);
      localStorage.setItem('lsUserList', JSON.stringify(userList));
    }
    // informacion actual
    function _getUser(){
      var userList = JSON.parse(localStorage.getItem('lsUserList'));
      if(userList == null){
        userList = user;
      }
      return userList;
    }
  }
})();
