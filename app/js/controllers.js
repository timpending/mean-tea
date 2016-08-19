app.controller('InventoryController', function($scope, InventoryService, $route){
  $scope.view = {};
  InventoryService.getInventory().then(function(allTeas){
    $scope.view.teaArray = allTeas.data
  });
  // InventoryService.getCategories().then(function(results){
  //   console.log(results);
  //   // InventoryService.categoryArray = results
  //   // console.log(InventoryService.categoryArray);
  //   $scope.view.categoryArray = results
  //   // $route.reload();
  // });
  // $scope.sortByPrice = function(){
  //   $scope.view.priceOrderer = 'price'
  // }
  $scope.view.bagCount = InventoryService.bag.length;
  $scope.addToBag = function(qty, tea){
    if (typeof(qty) == "undefined"){
      qty = 1
      InventoryService.bag.push({quantity: qty, item: tea})
    } else {
      InventoryService.bag.push({quantity: qty, item: tea})
    }
    $scope.view.bagCount = InventoryService.bag.length
  }

});

app.controller('CheckoutController', function($scope, InventoryService, $route){
  $scope.view = {};
  $scope.view.items = InventoryService.bag
})
