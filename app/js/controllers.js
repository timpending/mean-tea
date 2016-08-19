app.controller('NavController', function($scope, InventoryService){
  $scope.view = {};
  InventoryService.getCategories().then(function(results){
    $scope.view.categoryArray = results
  });
  // $scope.sortByPrice = function() {
  //   console.log('~~~~~~~~~~');
  //   InventoryService.priceOrderer = $scope.view.priceSortSelection
  // }
})


app.controller('InventoryController', function($scope, InventoryService){
  $scope.view = {};
  InventoryService.getInventory().then(function(allTeas){
    $scope.view.teaArray = allTeas.data
  });

  // $scope.view.priceOrderer = InventoryService.priceOrderer
});
