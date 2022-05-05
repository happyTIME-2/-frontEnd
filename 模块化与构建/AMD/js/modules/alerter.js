define([
  'dataService',
], function(dataService) {
  let name = 'john';

  function showMsg () {
    alert(dataService.getMsg() + ', ' + name);
  }
  
  return { showMsg }
});