const connection = require('../../config/connection');

const deleteCart = (userId) => {
  const sql = {
    text: 'DELETE FROM cart WHERE userId = $1',
    value: userId,
  };
  return connection.query(sql);
};

module.exports = deleteCart;
