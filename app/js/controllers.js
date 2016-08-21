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
  $scope.select = {
    value: "Option1",
    choices: ["Option1", "I'm an option", "This is materialize", "No, this is Patrick."]
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
     if ($scope.view.newQty)
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
