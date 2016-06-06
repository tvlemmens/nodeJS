var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
   if (err){
     console.log("No such file");
      console.log(err.stack);
      return;
   }
   console.log(data.toString());
});
console.log("Program Ended");
