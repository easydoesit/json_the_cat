const request = require("request");

// command line arguments
const args = process.argv.slice(2);
const url = `https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`;



// request info from the server

request(url, function(error, response, body) {
  if (error) {
    if (error.code === 'ENOTFOUND') {
      console.error('error:', error);
      return;
    }
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log("Sorry, that breed was not found");
    return;
  }
  //console.log('statusCode:', response && response.statusCode);
  console.log(data[0].description);
  //console.log(typeof data);
});
