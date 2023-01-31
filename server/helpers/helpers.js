const axios = require('axios');


let getProducts = (query) => {
  let options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/${query}`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `${process.env.TOKEN}`
    }
  };
  return axios(options).catch(err => {
    console.error(err);
    });
};

let markReviewHelpful = (query) => {
  let options = {
    method: 'put',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/${query}`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `${process.env.TOKEN}`
    }
  }
  return axios(options).catch(err => {
    console.error(err);
    });
}



module.exports.getProducts = getProducts;
module.exports.markReviewHelpful = markReviewHelpful;