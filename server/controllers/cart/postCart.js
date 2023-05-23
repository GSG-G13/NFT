const postCartQuery = require('../../db/queries/cart/postCart');

const postCart = (req, res, next) => {
  const { userId, productId } = req.body;
  postCartQuery(userId, productId)
    .then((data) => res.json({
      error: false,
      message: 'Item added to cart successfully',
      data: data.rows,
    }))
    .catch((error) => next(error));
};
module.exports = postCart;
