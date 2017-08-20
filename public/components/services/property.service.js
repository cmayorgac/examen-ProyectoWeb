(function (){
  angular
  .module('app')
  .service('propertyService', propertyService);
  propertyService.$inject = ['$http'];
  function propertyService($http){
    var property = [];
    var publicAPI = {
      getProperty: _getProperty,
      //search: _search,
      update: _update
    };
    return publicAPI;
    // informacion actual
    function _getProperty(){
      // var propertyList = JSON.parse(localStorage.getItem('lsPropertyList'));
      // if(propertyList == null){
      //   propertyList = property;
      // }
      // return propertyList;
      return $http.get('http://localhost:3000/api/get_all_properties');
    }
    // buscar propiedad
    function _search(property){
      var propertyList = _getProperty();
      for (var i = 0; i < propertyList.length; i++) {
        if (property == propertyList[i].id) {
          return propertyList[i];
        }
      }
    }
    // actulizar
    function _update(editProperty){
      // var propertyList = _getProperty();
      // for (var i = 0; i < propertyList.length; i++) {
      //   if (propertyList[i].id == editProperty.id) {
      //     propertyList[i] = editProperty;
      //   }
      // }
      // localStorage.setItem('lsPropertyList', JSON.stringify(propertyList));
    }
  }
})();
