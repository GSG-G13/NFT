const getCartQuery = require('../../db/queries/cart/getCart');

const getCart = (req, res, next) => {
  getCartQuery()
    .then((date) => res.json({
      error: false,
      message: 'Fetch data successfully',
      date: date.rows,
    }))
    .catch((error) => next(error));
};
module.exports = getCart;
