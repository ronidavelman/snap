(function () {
  angular.module('SnapApp')

.service('HomeService', ['$http','$httpParamSerializerJQLike','$timeout','$rootScope','$cookies', function($http, $httpParamSerializerJQLike, $timeout, $rootScope, $cookies) {

  var self = this;
  this.GenerateImage = function($scope){
    var params = {requestType:'GenerateImage', url:$scope.input.url, size: $scope.input.size};
    $http({
    url: "/Backend/API.php",
      method: "POST",
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      data: $httpParamSerializerJQLike(params)
    }).success(function(data, status, headers, config) {
      console.log(data);
    });
  }
}]);

}());
