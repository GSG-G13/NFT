const connection = require('../../config/connection');

const postCart = (userId, productId) => {
  const sql = {
    text: 'INSERT INTO cart (userId, productId) VALUES ($1, $2) RETURNING * ; ',
    value: [userId, productId],
  };
  return connection.query(sql);
};

module.exports = postCart;
