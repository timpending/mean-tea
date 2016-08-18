app.filter('pricer', function(){
  return function(input){
    return ('$'+((Number(input)/100).toFixed(2).toString()))
  }
})
