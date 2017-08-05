(function(){
  'use strict'
  angular
  .module('app')
  .controller('homeCtrl', homeCtrl);

  function homeCtrl($http, $state, /*imageService,*/ userService, propertyService){
    var vm = this;
    // vm.cloudObj = imageService.getConfiguration();

    function init(){
      vm.user = {};
      vm.users = userService.getUser();
      vm.properties = propertyService.getProperty();
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
      userService.setUser(newUser);
      init();
    }

    vm.transaction = function(newTransaction){
      var buyer = userService.search(newTransaction.buyer);
      console.log(buyer);
      var property = propertyService.search(newTransaction.property);
      console.log(property);
      if (property.ownedby == -1) {
        if (buyer.money > property.price) {
          buyer.money -= property.price;
          property.ownedby = buyer.alias;
          userService.update(buyer);
          propertyService.update(property);
          console.log(buyer);
          console.log(property);
          init();
        }else {
          console.log("no tiene dinero");
        }
      }else {
        console.log("la propiedad esta vendida");
      }
    }
  }
})();
