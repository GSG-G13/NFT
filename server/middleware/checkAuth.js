const { verifyToken } = require('../utils/jwt');

const checkAuth = (req, res, next) => {
  const { token } = req.cookies;

  if (token) {
    verifyToken(token).then((myData) => {
      req.userInfo = myData;
      next();
    }).catch(() => {
      res.clearCookie('token');
      return res.status(401).json({ message: 'Unauthorized!' });
    });
  } else {
    res.redirect('/');
  }
};

module.exports = checkAuth;
