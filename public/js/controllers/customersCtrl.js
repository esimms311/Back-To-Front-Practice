angular.module('customers').controller('customersCtrl', function($scope, customersService){


  var getCustomers = function(){
  customersService.getCustomers().then(function(response){
    $scope.customers = response.data
  })
}
getCustomers();

$scope.addCustomer = function(newCustomer){
  newCustomer.id = $scope.customers.length + 1
  customersService.addCustomer(newCustomer).then(function(res){
    if(res.data === 'success'){
      getCustomers()
    }
  })
}

$scope.selected = -1
$scope.toggleInputs = function(index){
  if(index === $scope.selected){
    $scope.selected = -1

  } else {
    $scope.selected = index
    $scope.first =$scope.customers[index].first
    $scope.last =$scope.customers[index].last

}
}

$scope.update = function(updatedCustomer){
  $scope.selected = -1;
  customersService.updateCustomer(updatedCustomer).then(function(res){
    if(res.data === 'updated!'){
      getCustomers()
    }
  })
}

$scope.delete = function(customer){
  $scope.selected = -1;
  customersService.deleteCustomer(customer).then(function(res){
    if(res.data === 'deleted'){
      getCustomers();
    }
  })
}





})
