var fs = require('fs');

console.log("Starting dir read.");
fs.readdir(".", function (err, files){
  if (err) console.log("Error accessing dir");
  files.forEach(function(file){
    console.log("\t" + file);
  });
});

console.log("Printing file name:");
console.log(__filename);
console.log(__dirname);
