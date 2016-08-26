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
    var idArray = []
    InventoryService.bag.forEach(function(item){
      idArray.push(item.id);
    })
    var indexPos = idArray.indexOf(tea._id)

    if (indexPos > -1) {
      if (typeof(qty) == "undefined"){
        InventoryService.bag[indexPos].quantity+=1
        InventoryService.bag[indexPos].newQty+=1
      } else {
        InventoryService.bag[indexPos].quantity+= Number(qty)
        InventoryService.bag[indexPos].newQty+= Number(qty)
      }
    } else {
      if (typeof(qty) == "undefined"){
        qty = 1
        item = {};
        item.id = tea._id
        item.item = tea;
        item.quantity = Number(qty);
        item.showUpdateQty = false;
        item.newQty = Number(qty)
        InventoryService.bag.push(item)
      } else {
        item = {};
        item.id = tea._id
        item.item = tea;
        item.quantity = Number(qty);
        item.showUpdateQty = false;
        item.newQty = Number(qty)
        InventoryService.bag.push(item)
    }
  }
    $scope.view.bagCount = InventoryService.bag.length
  }

  // $scope.addToBag = function(qty, tea){
  //   if (typeof(qty) == "undefined"){
  //     qty = 1
  //     item = {};
  //     item.id = tea._id
  //     item.item = tea;
  //     item.quantity = qty;
  //     item.showUpdateQty = false;
  //     item.newQty = qty
  //     InventoryService.bag.push(item)
  //   } else {
  //     item = {};
  //     item.id = tea._id
  //     item.item = tea;
  //     item.quantity = qty;
  //     item.showUpdateQty = false;
  //     item.newQty = qty
  //     InventoryService.bag.push(item)
  //   }
  //   $scope.view.bagCount = InventoryService.bag.length
  // };

  $scope.clearFilters = function(){
    $scope.view.priceOrderer = '';
    $scope.view.searchText = '';
    $scope.view.catSort = '';
  }
});

app.controller('CheckoutController', function($scope, InventoryService, $route){
  $scope.view = {};
  $scope.view.items = InventoryService.bag
  $scope.view.bagCount = InventoryService.bag.length
  $scope.view.total = function(){
    return InventoryService.getTotal(InventoryService.bag)
  }
  $scope.showUpdateQty = function(index){
      InventoryService.bag[index].showUpdateQty = true;
   }
   $scope.saveQty = function(num){
     var newQty = InventoryService.bag[num].newQty
     if (typeof(newQty) == "undefined" || newQty == '' || newQty == null){
     } else {
      InventoryService.bag[num].quantity = newQty
     }
    InventoryService.bag[num].showUpdateQty = false;
   }
   $scope.removeItem = function (index){
     InventoryService.bag.splice(index, 1);
   }

})
