angular.module('customers').service('customersService', function($http, $q){

this.getCustomers = function(){
  return $http({
    method: 'GET',
    url: '/api/customers'
  })
}
this.addCustomer = function(customer){
  return $http({
    method: 'POST',
    url: '/api/customers',
    data: customer
  })
}
this.updateCustomer = function(updatedCustomer){
  return $http({
    method: 'PUT',
    url: '/api/customers/' + updatedCustomer.id,
    data: updatedCustomer
  })
}
this.deleteCustomer = function(customer){
  return $http({
    method: 'DELETE',
    url: '/api/customers/' + customer.id
  })
}


})
