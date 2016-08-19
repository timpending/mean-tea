app.controller('InventoryController', function($scope, InventoryService){
  $scope.view = {};
  InventoryService.getInventory().then(function(allTeas){
    $scope.view.teaArray = allTeas.data
  })
});

app.controller('NavController', function($scope, InventoryService){
  $scope.view = {};
  InventoryService.getCategories().then(function(results){
    $scope.view.categoryArray = results
  })
})
