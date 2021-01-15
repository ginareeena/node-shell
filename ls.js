const fs = require("fs");

const ls = function (done) {
  fs.readdir("./", "utf8", (err, files) => {
    if (err) {
      done("Something went wrong!");
      //   throw err;
    } else {
      done(files.join("\n"));
      //   process.stdout.write(files.join("\n"));
      //   process.stdout.write("\nprompt > ");
    }
  });
};
module.exports = ls;
// module.exports.ls = ls;
