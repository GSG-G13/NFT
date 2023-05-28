const logout = (req, res, next) => {
  try {
    res.clearCookie('token').redirect('http://localhost:5173/');
  } catch (err) {
    next(err);
  }
};

module.exports = logout;
