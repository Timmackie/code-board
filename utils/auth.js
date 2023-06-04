// Middleware function to enforce authentication
const withAuth = (req, res, next) => {
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};
// Exports withAuth function
module.exports = withAuth;
