/*
exports.perimeter = function(x ,y) {
  return (x + y) * 2;
};

exports.area = function(x, y) {
  return x * y;
};
*/

module.exports = function (x, y, callback) {
  try {
    if (x < 0 || y < 0) {
      throw new Error("Dimensions should be positive! l = " + x + " and b = " + y);
    } else {
      callback(null, {
        perimeter: function() { return ((x+y)*2); },
        area: function(){ return (x*y);}
      });
    }
  }
  catch (error) { callback(error, null); }
};
