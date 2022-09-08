var fs = require("fs");
var path = require("path");
const file = path.join(__dirname, "../prisma/schema.prisma");
fs.readFile(
    file,
  "utf8",
  function (err, data) {
    if (err) {
      return console.log(err);
    }
    const sqlite = 'provider = "sqlite"';

    const mysql = 'provider = "mysql"';

    var result = data.replace(sqlite, mysql);
      fs.writeFile(file, result, 'utf8', function (err) {
         if (err) return console.log(err);
      });
  }
);
