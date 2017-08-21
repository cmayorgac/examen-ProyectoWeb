(function (){
  angular
  .module('app')
  .service('userService', userService);
  userService.$inject = ['$http'];
  function userService($http){
    var user = [];
    var publicAPI = {
      setUser: _setUser,
      getUser: _getUser,
      search: _search,
      update: _update
    };
    return publicAPI;
    // guardar
    function _setUser(newUser){
      // var userList = _getUser();
      // userList.push(newUser);
      // localStorage.setItem('lsUserList', JSON.stringify(userList));
      return $http.post('http://localhost:3000/api/save_user', newUser);
    }
    // informacion actual
    function _getUser(){
      // var userList = JSON.parse(localStorage.getItem('lsUserList'));
      // if(userList == null){
      //   userList = user;
      // }
      // return userList;
      return $http.get('http://localhost:3000/api/get_all_users');
    }
    // buscar comprador
    function _search(userList, buyer){
      for (var i = 0; i < userList.length; i++) {
        if (buyer == userList[i].alias) {
          return userList[i];
        }
      }
    }
    // actulizar
    function _update(editUser){
      // var userList = _getUser();
      // for (var i = 0; i < userList.length; i++) {
      //   if (userList[i].alias == editUser.alias) {
      //     userList[i] = editUser;
      //   }
      // }
      // localStorage.setItem('lsUserList', JSON.stringify(userList));
      return $http.put('http://localhost:3000/api/update_user', editUser);
    }
  }
})();
