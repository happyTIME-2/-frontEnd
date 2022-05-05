define(function() {
  let msg = 'hello';

  function getMsg () {
    return msg.toUpperCase();
  }

  return { getMsg }
});