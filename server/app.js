require('dotenv').config();
const express = require('express');
const { join } = require('path')

const parser = require('cookie-parser');
const userRouter = require('./routes/userRouter');
const cartRouter = require('./routes/cartRouter');
const checkAuth = require('./middleware/checkAuth');
const productRouter = require('./routes/productRouter');

// eslint-disable-next-line import/no-extraneous-dependencies
const app = express();
app.set('PORT', process.env.PORT || 5555);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(parser());
app.disable('x-powered-by');
app.use(express.static(join(__dirname, '../client/dist')))

app.use('/api', userRouter);
app.use(checkAuth)
app.use('/api', productRouter);
app.use('/api', cartRouter);
app.get('*', (req,res)=>{
    res.sendFile(join(__dirname, '../client/dist/index.html'))
})


module.exports = app;
