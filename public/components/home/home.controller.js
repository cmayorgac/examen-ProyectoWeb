(function(){
  'use strict'
  angular
  .module('app')
  .controller('homeCtrl', homeCtrl);
  homeCtrl.$inject = ['$http', '$state', 'imageService', 'Upload', 'userService', 'propertyService'];
  function homeCtrl($http, $state, imageService, Upload, userService, propertyService){
    var vm = this;
    vm.cloudObj = imageService.getConfiguration();
    vm.alertR = {state: false};
    vm.alertC = {state: false};
    vm.alertD = {state: false};
    vm.alertP = {state: false};

    function init(){
      vm.user = {};
      vm.info = {};
      userService.getUser().then(function(response){
        vm.users = response.data;
      });
      propertyService.getProperty().then(function(response){
        vm.properties = response.data;
      });
    }init();

    vm.preSave = function(newUser){
      console.log(newUser);
        vm.cloudObj.data.file = document.getElementById("photo").files[0];
        Upload.upload(vm.cloudObj)
          .success(function(data){
            newUser.photo = data.url;
            vm.save(newUser);
          })
          .catch(function(error){
            console.log(error);
          })
    }

    vm.save = function(newUser){
      newUser.money = 1000;
      console.log(newUser);
      userService.setUser(newUser).then(function(response){
        vm.users = response.data;
        vm.alertR = {state: true};
      });
      init();
    }

    vm.transaction = function(newTransaction){
      var userList = vm.users;
      var buyer = userService.search(userList, newTransaction.buyer);
      var propertyList = vm.properties;
      var property = propertyService.search(propertyList, newTransaction.property);
      if (property.ownedby == -1) {
        if (buyer.money > property.price) {
          buyer.money -= property.price;
          property.ownedby = buyer.alias;
          userService.update(buyer).then(function(response){
            vm.users = response.data;
            vm.alertC = {state: true};
        });
          propertyService.update(property).then(function(response){
            vm.properties = response.data;
        });
          init();
        }else {
          console.log("no tiene dinero");
          vm.alertD = {state: true};
          init();
        }
      }else {
        console.log("la propiedad esta vendida");
        vm.alertP = {state: true};
        init();
      }
    }

    vm.cancel = function(){
      vm.alertR = {state: false};
      vm.alertC = {state: false};
      vm.alertD = {state: false};
      vm.alertP = {state: false};
    }
  }
})();
