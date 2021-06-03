const request = require("request");

const fetchBreedDescription = (breedName, callback) => {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      if (error) {
        callback(error, null);
      } else {
        const data = JSON.parse(body);
        if (data.length === 0) {
          callback("Requested Breed Not Found", null);
        } else {
          if (data.hasOwnProperty("message")) {
            callback(data.message, null);
          } else if (data.length === 1) {
            callback(null, data[0].description);
          } else {
            callback(
              "Multiple results came up, please narrow down your search",
              null
            );
          }
        }
      }
    }
  );
};

module.exports = {
  fetchBreedDescription,
};
