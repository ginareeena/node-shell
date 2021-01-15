const request = require("request");

function curl(url) {
  request(url, function (error, response, body) {
    console.error("error:", error); // Print the error if one occurred
    console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    process.stdout.write(body);
    // console.log('body:', body); // Print the HTML for the Google homepage.
  });
}

module.exports.curl = curl;
