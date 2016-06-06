var fs = require("fs");
var zlib = require('zlib');

// Compress the file input.txt to input.txt.gz
fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('input.txt.gz'));

console.log("File Compressed.");

fs.stat('input.txt', function (err, data){
  if (err) console.log(err);
  console.log(data);
  console.log(data.isFile());
});
