app.controller('InventoryController', function($scope, InventoryService){
  $scope.view = {};
  InventoryService.getInventory().then(function(allTeas){
    $scope.view.teaArray = allTeas.data
  })
});
