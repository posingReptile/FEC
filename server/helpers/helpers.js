const axios = require('axios');


let getProducts = (query) => {
  let options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/${query}`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `${process.env.TOKEN}`
    },
    // params: {
    //   count: 15
    // }
  };
  return axios(options).catch(err => {
    console.error(err);
    });
};

let postProducts = (query, data) => {
  let options = {
    method: 'post',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/${query}`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `${process.env.TOKEN}`
    },
    data: {
      "body": data.body,
      "name": data.name,
      "email": data.email,
      "product_id": JSON.parse(data.product_id)
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
module.exports.postProducts = postProducts;