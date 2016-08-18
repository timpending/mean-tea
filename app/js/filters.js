app.filter('pricer', function(){
  return function(input){
    return ('$'+((Number(input)/100).toFixed(2).toString()))
  }
})

app.filter('stocker', function(){
  return function(input){
    if (input == true){
      return 'Yes'
    } else {
      return 'No'
    }
  }
})
