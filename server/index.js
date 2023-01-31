require('dotenv').config();
const express = require('express');
const path = require('path');
const axios = require('axios');
const {getProducts} = require('./helpers/helpers.js')


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/getProducts', (req, res) => {
  let query = '';
  let productId = req.query.product_id;
  let style = req.query.style;
  if (style && productId) {
    query += `${productId}/styles`;
  } else if (productId) {
    query += productId;
  };

  // console.log(query);
  getProducts(`products/${query}`).then((data) => {
    // console.log(data.data);
    res.json(data.data);
  }).catch((err) => console.log(err));
});

app.get('/questions', (req, res) => {
  let id = req.query.product_id
  getProducts(`qa/questions/?product_id=${id}&count=100&sort=helpful`)
  .then(data => res.json(data.data))
})

app.get('/getReviews', (req, res) => {
  let query = '';
  query += req.query.product_id;

  getProducts(`reviews/?product_id=${query}&count=100`)
    .then(data => {
      res.json(data.data);
    })
    .catch(err => console.log(err));
})

app.get('/getReviewsMeta', (req, res) => {
  let query = '';
  query += req.query.product_id;

  getProducts(`reviews/meta/?product_id=${query}`)
    .then(data => {
      res.json(data.data)
    })
    .catch(err => console.log(err));
})

// const PORT = process.env.PORT || 3000;
app.listen(process.env.PORT);
console.log(`listening on port http://localhost:${process.env.PORT}`);