
app.controller("MainStoreController",function($scope,storeService,$routeParams){
	/*$scope.product = 
    {
      name : "",
      model : "",
      year : "",
      price : "",
      producer : "",
      available : ""
    };*/
	
    $scope.add = function(index){
    	$scope.records[index].available+=1;
    };
    $scope.sub = function(index){
    	if ($scope.records[index].available > 0)
    	$scope.records[index].available-=1;
    };
    $scope.remove = function(index){
    	 $scope.records.splice(index,1);
    };
    $scope.addProduct = function(){
    	
    	storeService.postProduct($scope.product).then(function(data){
    		console.log('đã gửi data thành công'); 
    		name : $scope.product.name;
    		model : $scope.product.model;
    		year : $scope.product.year;
    		price : $scope.product.price;
    		producer : $scope.product.producer;
    		available : $scope.product.available;
    	})
    	
  };

    $scope.getAll = function(){
    	
    	storeService.getProducts().then(function(data)
    			{  
    		$scope.records = data;
    		console.log('lấy danh sách data thành công');
    			});
        
      }; 
      $scope.id = $routeParams.id;
      storeService.getProduct($scope.id).then(function(data){
    	  $scope.record = data;
      })
 
});

app.directive('myDir',function(){
	return {
		templateUrl: "/fresherangular/views/github/temp.html"
	}
})

