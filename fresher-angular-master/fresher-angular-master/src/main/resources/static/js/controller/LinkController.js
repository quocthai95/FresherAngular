app.controller("LinkController",function($scope,storeService,$routeParams){
	
	$scope.id = $routeParams.id;
    storeService.getProduct($scope.id).then(function(data){
  	  $scope.record = data;
    });
    
    
});
