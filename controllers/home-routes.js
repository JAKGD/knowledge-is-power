const router = require('express').Router();
const { Question, Answer } = require('../models/');

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array
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

  let shuffledArr = shuffleArray(questions);

  let questionsToFE = shuffledArr.map((question) => {
    const shuffledAnswers = shuffleArray(question.answers); // Shuffle the answers for each question
    return { ...question, answers: shuffledAnswers };
  });

  questionsToFE = questionsToFE.slice(0, 5); // Get the first 5 shuffled questions

  res.render('quiz', {
    questionsToFE,
    loggedIn: req.session.loggedIn
  });
});

router.get('/signup', (req, res) => {
  res.render('signup', { loggedIn: req.session.loggedIn });
});

router.get('/login', (req, res) => {
  res.render('login', { loggedIn: req.session.loggedIn });
});

module.exports = router;