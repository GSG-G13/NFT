require('dotenv').config();
const express = require('express');

const parser = require('cookie-parser');
const userRouter = require('./routes/userRouter');
const productRouter = require('./routes/productRouter');

// eslint-disable-next-line import/no-extraneous-dependencies
const app = express();
app.set('PORT', process.env.PORT || 5555);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(parser());
app.disable('x-powered-by');

app.use('/api', userRouter);

app.use('/api', productRouter);

module.exports = app;
