const request = require("request");
const breedName = process.argv[2];

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
  (error, response, body) => {
    if (error) {
      console.error('Invalid URI, please check the URI');
      // console.log(response && response.statusCode);
    } else {
      if (body.length === 0) {
        console.log("Requested Breed Not Found");
      } else {
        const data = JSON.parse(body);
        if (data.hasOwnProperty("message")) {
          console.log(data.message);
        } else {
          console.log(data[0].description);
        }
      }
    }
  }
);
