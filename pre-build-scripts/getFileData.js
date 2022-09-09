var fs = require("fs");
var path = require("path");
const file = path.join(__dirname, "../prisma/schema.prisma");
fs.readFile(file, "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});
