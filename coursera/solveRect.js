var rect = require('./rect');
/*
var rect = {
  area: function(x,y){
    return (x*y);
  },
  perimeter: function (x,y) {
    return (x+y) * 2;
  }
};

console.log(rect.area(4, 3));
console.log(rect.perimeter(5,6));
*/

var l = 5;
var b = 6;

solveRect(l, b);

function solveRect(l, b) {
  console.log("b= " + b + " l= " + l);
  rect(l, b, function(err, rectCalc) {
    if (err) {
      console.log(err);
    } else {
      console.log(rectCalc.area());
      console.log(rectCalc.perimeter());
      console.log(rectCalc.area );
    }
  });

};
