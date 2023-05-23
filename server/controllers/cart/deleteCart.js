const deleteCartQuery = require('../../db/queries/cart/deleteCart');

const deleteCart = (req, res, next) => {
  const { id } = req.body;
  deleteCartQuery(id)
    .then(() => {
      res.status(200).json({
        error: false,
        message: 'successfully',
      });
    }).catch((error) => next(error));
};

module.exports = deleteCart;
