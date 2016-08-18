app.service('InventoryService', function($http){
  return {
    getInventory: function() {
      return $http.get('tea.json')
    }
  }
});
