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
  getProducts('products').then((data) => {
    // console.log(data);
    res.json(data.data);
  })
});


app.get('/questions', (req, res) => {
  let id = req.query.product_id
  getProducts(`qa/questions/?product_id=${id}&count=100`)
  .then(data => res.json(data.data))
})

// const PORT = process.env.PORT || 3000;
app.listen(process.env.PORT);
console.log(`listening on port http://localhost:${process.env.PORT}`);