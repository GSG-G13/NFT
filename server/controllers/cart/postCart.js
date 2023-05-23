const postCartQuery = require('../../db/queries/cart/postCart');

const postCart = (req, res) => {
  postCartQuery()
    .then((data) => res.json({
      error: false,
      message: 'Fetch data successfully',
      data: data.rows,
    }))
    .catch((error) => console.log(error));
};
module.exports = postCart;
