const fs = require('fs');

let cat = function(fileName) {
    fs.readFile( "./" + fileName, "utf8", (err, data) => {
        if (err) {
            throw err;
        }
        else {
            process.stdout.write(data);
            process.stdout.write("\nprompt > ");
        }
    }
    );
};


module.exports.cat = cat;