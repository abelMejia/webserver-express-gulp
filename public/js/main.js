"use strict";

// ES5: A convoluted function closure
var login = function ES5() {
  var privateKey = Math.random();

  return function (password) {
    return password === privateKey;
  };
}();