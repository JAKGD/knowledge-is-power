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
  const questions = await Question.findAll({
    include: [Answer],
  });

  shuffleArray(questions);

  // var question_1 = questions[0];
  // var question_2 = questions[1];
  // var question_3 = questions[2];
  // var question_4 = questions[3];
  // var question_5 = questions[4];

  // const question_bank = [];

  const question = questions[0]

  // question_bank.push(question_1, question_2, question_3, question_4, question_5)

  res.render('quiz', {
    // question_bank,
    question
  });

});

router.get('/signup', (req, res) => {
  res.render('signup', { loggedIn: req.session.loggedIn });
});

router.get('/login', (req, res) => {
  res.render('login', { loggedIn: req.session.loggedIn });
});

module.exports = router;