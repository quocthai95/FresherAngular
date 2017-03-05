
app.controller("MainStoreController",function($scope,storeService,$routeParams){
	
	$scope.id = $routeParams.id;
    $scope.add = function(index,id){
    		storeService.getProductIA(id).then(function(data){
    			console.log('đã tăng');
    			$scope.records[index].available +=1;
    		
    			
    		})};
    
    $scope.sub = function(index,id){
    	storeService.getProductDA(id).then(function(data){
			console.log('đã giảm');
			if ($scope.records[index].available > 0)
			$scope.records[index].available -=1;  	
    })};
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
      
 
});

app.directive('myDir',function(){
	return {
		templateUrl: "/fresherangular/views/github/temp.html"
	}
})

