app.service('InventoryService', function($http){
  return {
    getInventory: function() {
      return $http.get('tea.json')
    },
    getCategories: function() {
      var categoryArray = [];
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
    searchText: ''
  }
});
