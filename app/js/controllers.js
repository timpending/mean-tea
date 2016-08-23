app.controller('InventoryController', function($scope, InventoryService, $route){
  $scope.view = {};
  InventoryService.getInventory().then(function(allTeas){
    $scope.view.teaArray = allTeas.data
  });
  InventoryService.getCategories().then(function(results){
    $scope.view.categoryArray = results
  });
  $scope.sortByPrice = function(priceSelection){
    if (priceSelection == 'price'){
      $scope.view.priceOrderer = 'price'
    } else {
      $scope.view.priceOrderer = '-price'
    }
  }
  $scope.sortByCategory = function(catSelection){
    $scope.view.catSort = catSelection
  }
  $scope.view.bagCount = InventoryService.bag.length;
  $scope.addToBag = function(qty, tea){
    if (typeof(qty) == "undefined"){
      qty = 1
      item = {};
      item.id = tea._id
      item.item = tea;
      item.quantity = qty;
      InventoryService.bag.push(item)
    } else {
      item = {};
      item.id = tea._id
      item.item = tea;
      item.quantity = qty;
      InventoryService.bag.push(item)
    }
    $scope.view.bagCount = InventoryService.bag.length
  };
});

app.controller('CheckoutController', function($scope, InventoryService, $route){
  $scope.view = {};
  $scope.view.items = InventoryService.bag
  $scope.view.bagCount = InventoryService.bag.length
  $scope.view.updateQtyView = false
  $scope.view.notUpdateQtyView = true
  $scope.view.total = function(){
    return InventoryService.getTotal(InventoryService.bag)
  }
  $scope.showUpdateQty = function(){
      $scope.view.updateQtyView = !$scope.view.updateQtyView
      $scope.view.notUpdateQtyView = !$scope.view.notUpdateQtyView
   }
   $scope.saveQty = function(){
     if (typeof($scope.view.newQty) == "undefined" || $scope.view.newQty == '' || $scope.view.newQty == null){
     } else {
      item.quantity = $scope.view.newQty
     }
     $scope.view.updateQtyView = false
     $scope.view.notUpdateQtyView = true
   }
   $scope.removeItem = function (index){
     InventoryService.bag.splice(index, 1);
   }

})
