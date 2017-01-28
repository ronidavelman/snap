(function () {
   angular.module('SnapApp')
   .controller('HomeCtrl', ['$scope','$rootScope','HomeService',function ($scope, $rootScope, HomeService) {
     $scope.input = {
       url:'',
       urlError: false,
       size: 'iphone4'
     }

     $scope.input.submit = function(){
       if($scope.input.url != '' && $scope.input.url.includes('.')){
         // Passed validation
         $scope.input.urlError = false;
         HomeService.GenerateImage($scope);
       }else{
         // Show error message
         $scope.input.urlError = true;
       }
     }

     $scope.exampleUrl = function(url){
       $scope.input.url=url;
       $scope.input.submit();
     }

   }]);
}());
