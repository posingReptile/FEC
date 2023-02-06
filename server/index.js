/* eslint-disable no-undef */
require('dotenv').config();
const express = require('express');
const path = require('path');
const axios = require('axios');
const {getProducts, markHelpfulOrReport, postProducts, postAnswer} = require('./helpers/helpers.js')


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
  let sortQuery = '';
  sortQuery += req.query.sort;

  getProducts(`reviews/?product_id=${query}&sort=${sortQuery}&count=250`)
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

app.post('/addReview', (req, res) => {
  let charObject = {};
  let char = req.body.charChoice;
  for (let charKey in char) {
    charObject[charKey] = JSON.parse(char[charKey].rating);
  }

  postReview('reviews', {
    product_id: req.body.product_id,
    rating: req.body.starRating,
    summary: req.body.summary,
    body: req.body.body,
    recommend: req.body.recommend.value,
    name: req.body.username,
    email: req.body.email,
    characteristics: charObject,
    photos: req.body.img
  })
    .then(() => console.log('review posted'))
    .catch(err => console.log('error in express addReview', err))
    res.send('review posted')
})

app.post('/addQuestion', (req, res) => {
  postProducts(`qa/questions/`, {
    body: req.body.value.question,
    name: req.body.value.nickname,
    email: req.body.value.email,
    product_id: req.body.value.product_id
  })
  .then(data => console.log('addQuestion complete'))
  .catch(err => (console.log('error in express addQuestion', err)))
  res.send('post complete')
})

app.post('/addAnswer', (req, res) => {
  postAnswer(`qa/questions/${req.body.value.question_id}/answers`, {
    body: req.body.value.answer,
    name: req.body.value.nickname,
    email: req.body.value.email,
  })
  .then(data => console.log('addAnswer complete'))
  .catch(err => (console.log('error in express addQuestion', err)))
  res.send('post complete')
})

app.put('/markReviewHelpful', (req, res) => {
  let query = '';
  query += req.query.review_id;
  // console.log(query)

  markHelpfulOrReport(`reviews/${query}/helpful`)
    .then(() => console.log(`Review ${query} was marked helpful!`))
    .catch(err => console.log(err));
})
app.put('/reportReview', (req, res) => {
  let query = '';
  query += req.query.review_id;
  // console.log(query)

  markHelpfulOrReport(`reviews/${query}/report`)
    .then(() => console.log(`Review ${query} reported`))
    .catch(err => console.log(err));
})

app.get('/productsList', (req, res) => {
  let count = req.query.count;
  let query = count || 10;
  getProducts(`products/?count=${query}`).then((data) => {
    res.json(data.data);
  }).catch((err) => console.log(err));
});



app.put('/QAHelpfulOrReport', (req, res) => {
  let query = req.body.query
  markHelpfulOrReport(`qa/${query}`)
  .then(() => console.log('qa helpful or report put request success'))
  .catch(err => console.log('err in QA Put', err))
  res.send('put complete')
})

// const PORT = process.env.PORT || 3000;
app.listen(process.env.PORT);
console.log(`listening on port http://localhost:${process.env.PORT}`);