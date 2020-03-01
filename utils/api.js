// Grabbing dependencies
const axios = require("axios");
// Get user's GitHub Details
const api = {
    getUser(ghUsername) {
      axios.get(`http://api.github.com/users/${ghUsername}`)
        .then(function(result) {
          // console.log(result);
          return result;   
      });
    }
  };
  module.exports = api;
  