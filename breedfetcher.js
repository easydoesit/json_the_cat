const request = require("request");

const fetchBreedDescription = function(breedName, callback) {

  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  // request info from the server

  request(url, function(err, response, body) {
    if (err !== null) {
      if (err.code === 'ENOTFOUND') {
        callback(err,null);
        return;
      }
    } else {
      const data = JSON.parse(body);
  
      if (data.length === 0) {
        callback("Sorry, that breed was not found", null);
        return;
      }
      desc = data[0].description;
      callback(null, desc);
    }
  });
};

module.exports = { fetchBreedDescription };
