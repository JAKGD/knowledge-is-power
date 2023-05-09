
const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    res.render('homepage', {loggedIn: req.session.loggedIn });
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
