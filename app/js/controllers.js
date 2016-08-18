app.controller('InventoryController', function($scope, InventoryService){
  $scope.view = {};
  InventoryService.getInventory().then(function(allTeas){
    console.log(allTeas.data[0].imageUrl);
    $scope.view.teaArray = allTeas.data
  })
});
