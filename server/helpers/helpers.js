const axios = require('axios');


let getProducts = (query) => {
  let options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/${query}`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `${process.env.TOKEN}`
    }
    // params: {
    //   count: 10
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

let postReview = (query, data) => {
  let options = {
    method: 'post',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/${query}`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `${process.env.TOKEN}`
    },
    data: {
      "product_id": JSON.parse(data.product_id),
      "rating": JSON.parse(data.rating),
      "recommend": JSON.parse(data.recommend),
      "summary": data.summary,
      "body": data.body,
      "name": data.name,
      "email": data.email,
      "photos": ["https://64.media.tumblr.com/332f0b22d4eac658a2e87c73fd7db145/tumblr_inline_oujv3l9kfD1swtfnl_500.png"],
      "characteristics": data.characteristics
    }
  };
  return axios(options).catch(err => {
    console.error(err);
    });
};

let postAnswer = (query, data) => {
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
      "photos": ["https://lumiere-a.akamaihd.net/v1/images/102_gza1510_comp_v002_c5fae827.jpeg?region=0%2C0%2C3840%2C2160"]
    }
  };
  return axios(options).catch(err => {
    console.error(err);
    });
}

let markHelpfulOrReport = (query) => {
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
module.exports.markHelpfulOrReport = markHelpfulOrReport;
module.exports.postProducts = postProducts;
module.exports.postAnswer = postAnswer;
module.exports.postReview = postReview;