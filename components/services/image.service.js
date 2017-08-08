(function(){
  angular
  .module('app')
  .service('imageService', imageService);

  function imageService($http){

    var cloudObj = {
      url:'https://api.cloudinary.com/v1_1/dlwh2ml4t/image/upload',
      data:{
        upload_preset: 'CarlosMCh',
        tags:'CJM',
        context:'photo=test'
      }
    };

    var publicAPI = {
      getConfiguration : _getConfiguration
    }
    return publicAPI;

    function _getConfiguration(){
      return cloudObj;
    }

  }

})();
