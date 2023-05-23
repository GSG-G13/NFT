require('dotenv').config();
const express = require('express');

const parser = require('cookie-parser');
const userRouter = require('./routes/userRouter');
const cartRouter = require('./routes/cartRouter');

// eslint-disable-next-line import/no-extraneous-dependencies
const app = express();
app.set('PORT', process.env.PORT || 3000);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(parser());
app.disable('x-powered-by');

app.use('/api', userRouter);
app.use('/api', cartRouter);

module.exports = app;
