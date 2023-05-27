const logout = (req,res) => {
  req.clearCookie('token').redirect('/');
};
module.exports = logout;
