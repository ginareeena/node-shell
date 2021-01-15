let pwd = require("./pwd");
let ls = require("./ls");
let cat = require("./cat");
let curl = require("./curl");

process.stdout.write("prompt > ");
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  let arr = cmd.split(" ");
  let command = arr[0];
  if (command === "pwd") {
    pwd.pwd();
  } else if (command === "ls") {
    ls(done);
    // ls.ls();
  } else if (command === "cat") {
    let fileName = arr[1];
    //do the rest to everyone else as we did to ls
    cat.cat(fileName);
  } else if (command === "curl") {
    let urlName = arr[1];
    curl.curl(urlName);
  }
});
//prompt();

function done(output) {
  process.stdout.write(output);
  process.stdout.write("prompt > ");
}
