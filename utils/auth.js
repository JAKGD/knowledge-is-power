//-- Adding a function that checks whether a user is authenticated before allowing them to access certain routes in an Express.js application--//
//-- The function takes three parameters: req (request), res (response), and next--//
//-- The function checks whether the loggedIn property is set to true in the session object--//
//-- If it is not, the user is redirected to the '/login' route using the res.redirect() method--//
//-- the function is exported from the module using module.exports--//
const withAuth = (req, res, next) => {
  
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    
    next();
  }
};

module.exports = withAuth;
