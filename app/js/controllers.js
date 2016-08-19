app.controller('InventoryController', function($scope, InventoryService, $route){
  $scope.view = {};
  InventoryService.getInventory().then(function(allTeas){
    $scope.view.teaArray = allTeas.data
  });
  InventoryService.getCategories().then(function(results){
    console.log(results);
    // InventoryService.categoryArray = results
    // console.log(InventoryService.categoryArray);
    $scope.view.categoryArray = results
    // $route.reload();
  });
  $scope.sortByPrice = function(){
    $scope.view.priceOrderer = 'price'
    console.log($scope.view.priceOrderer);
  }
  $scope.view.select = {
            value: "Option1",
            choices: ["Option1", "I'm an option", "This is materialize", "No, this is Patrick."]
        };

});
