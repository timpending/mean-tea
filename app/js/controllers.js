app.controller('NavController', function($scope, InventoryService){
  $scope.view = {};
  InventoryService.getCategories().then(function(results){
    $scope.view.categoryArray = results
  });
  $scope.sortByPrice = function() {
    console.log('~~~~~~~~~~');
    console.log($scope.view.priceSortSelection);
    console.log('~~~~~~~~~~');
    // InventoryService.priceOrderer = $scope.view.priceSortSelection
  };
  $scope.$watch(function() {return $scope.view.searchText}, function(newValue, oldValue){
    if ( newValue !== oldValue ) {
    InventoryService.searchText = newValue
    console.log('~~~~~~~');
    console.log(InventoryService.searchText);
    console.log('~~~~~~~');
      }
    }
  );
});

app.controller('InventoryController', function($scope, InventoryService){
  $scope.view = {};
  InventoryService.getInventory().then(function(allTeas){
    $scope.view.teaArray = allTeas.data
  });
  $scope.$watch(function() {return InventoryService.searchText}, function(newValue, oldValue){
    if ( newValue !== oldValue ) {
        $scope.view.searchText = newValue
      }
    }
  )
  // $scope.view.priceOrderer = InventoryService.priceOrderer
});
