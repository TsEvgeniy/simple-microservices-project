const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const postRouter = require('./routes/postRoutes');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/', postRouter);

module.exports = app;
