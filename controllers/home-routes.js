const router = require('express').Router();
const { Question, Answer } = require('../models/');
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};
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
router.get('/quiz', async (req, res) => {
  console.log('here we get some data.')
  // const questions = await Question.findAll({
    
  // })
  // res.render('quiz', { loggedIn: req.session.loggedIn });
  // if (!req.session.userId) {
  //   res.redirect('/login'); // Redirect to login if user is not logged in
  //   return;
  // }

  const question = await Question.findOne({

    include: [Answer],
  });
  console.log("Patrick", question.answers[0].dataValues)
  // if (!questions) {
  //   res.send('There are no questions in the database.');
  //   return;
  // }

  req.session.score = 0;
  // req.session.questionId = question.id;


  res.render('quiz', {
    question,
    score: req.session.score,
  });

});

router.get('/signup', (req, res) => {
  res.render('signup', { loggedIn: req.session.loggedIn });
});

router.get('/login', (req, res) => {
  res.render('login', { loggedIn: req.session.loggedIn });
});

module.exports = router;