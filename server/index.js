require('dotenv').config();
const express = require('express');
const path = require('path');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));



// const PORT = process.env.PORT || 3000;
app.listen(process.env.PORT);
console.log(`listening on port http://localhost:${process.env.PORT}`);