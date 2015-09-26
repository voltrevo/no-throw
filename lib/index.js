'use strict';

module.exports = function(fn) {
  return function() {
    var res = {
      value: undefined,
      error: undefined
    };

    try {
      res.value = fn.apply(this, arguments);
    } catch (err) {
      res.error = err;
    }

    return res;
  };
};
