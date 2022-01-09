const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const commentRouter = require('./routes/commentRoutes');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/', commentRouter);

module.exports = app;
