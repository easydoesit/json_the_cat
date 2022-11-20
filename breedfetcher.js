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
        const sorry = "Sorry, that breed was not found";
        callback(null, sorry);
        return;
      }
      callback(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };
