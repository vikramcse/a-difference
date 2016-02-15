'use strict';

module.exports = function () {
  var arrays = Array.prototype.slice.call(arguments);
  var diffArray = [];

  arrays.forEach(function (arr) {
    if (Array.isArray(arr)) {
      arr.forEach(function (item) {
        var foundIndex = diffArray.indexOf(item);
        if (foundIndex === -1) {
          diffArray.push(item);
        } else {
          diffArray.splice(foundIndex, 1);
        }
      });
    }
  });

  return diffArray;
};
