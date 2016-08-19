app.service('InventoryService', function($http, $q){
  return {
    getInventory: function() {
      return $http.get('tea.json')
    },
    getCategories: function() {
      var categoryArray = []
      return $http.get('tea.json').then(function(results){
        results.data.forEach(function(result){
          result.categories.forEach(function(category){
            if(categoryArray.indexOf(category) < 0) {
              categoryArray.push(category);
            }
          })
        })
        return categoryArray
      })
    },
    searchText: '',
    priceOrderer: '',
    bagTotalQuantity: 0,
    bag: [],
    orderTotal: 1,
    getTotal: function(array){
        var total = 0
        array.forEach(function(item){
          var subtotal = item.quantity*(Number(item.item.price)/100)
          total += subtotal
        })
        total.toFixed(2)
        return total
    }
  }
});
