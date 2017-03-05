var app = angular.module('myApp');

app.factory('storeService', function($http) {

 

  var getProducts = function() {
    return $http.get("http://localhost:8000/fresherangular/product/list")
      .then(function(response) {
        return response.data;
        console.log('lấy data thành công');
      });
  };
  
  var getProduct = function(id) {
	    return $http.get("http://localhost:8000/fresherangular/product/get/" + id)
	      .then(function(response) {
	        return response.data;
	      });
	  };

  var postProduct = function(data){
	  return $http.post("http://localhost:8000/fresherangular/product/add",data)
	  .then(function(response) {
		  return response.data;
	  });
  };
  
  var getProductIA = function(id) {
	    return $http.get("http://localhost:8000/fresherangular/product/increase/" + id)
	      .then(function(response) {
	        return response.data;
	      });
	  };
	  
   var getProductDA = function(id) {
		    return $http.get("http://localhost:8000/fresherangular/product/decrease/" + id)
		      .then(function(response) {
		        return response.data;
		      });
		  };
	  
	  

  return {
	
    getProducts: getProducts,
    getProduct: getProduct,
    postProduct: postProduct,
    getProductIA: getProductIA,
    getProductDA: getProductDA
  }
});