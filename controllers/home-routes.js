const router = require('express').Router();
// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
  if (req.session.loggedIn) {
    res.render('homepage', { loggedIn: req.session.loggedIn });
  }

  else res.redirect('login');

} catch (err) {
  console.log(err);
  res.status(500).json(err);
}
});
router.get('/quiz', (req, res) => {
  res.render('quiz', { loggedIn: req.session.loggedIn });
});

router.get('/signup', (req, res) => {
  res.render('signup', { loggedIn: req.session.loggedIn });
});

router.get('/login', (req, res) => {
  res.render('login', { loggedIn: req.session.loggedIn });
});

module.exports = router;