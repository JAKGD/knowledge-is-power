const router = require('express').Router();
const { Question, Answer } = require('../../models');

// Middleware to shuffle an array in place
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

router.get('/quiz', async (req, res) => {
  console.log("quiz")
  // Set player score to 0
  req.session.score = 0;

  // Get a random question and its answers
  const question = await Question.findOne({
    include: [Answer],
    order: sequelize.random(),
  });

  // Shuffle the answers
  shuffleArray(question.answers);
console.log(question)
  // Render the quiz view with the question and answers
  res.render('quiz', {
    question,
    isCorrect: null,
    score: req.session.score,
  });
});

router.post('/quiz', async (req, res) => {
  const { answerId } = req.body;

  // Get the selected answer
  const selectedAnswer = await Answer.findByPk(answerId);

  // Check if the answer is correct
  const isCorrect = selectedAnswer.is_correct;

  // Update the player score
  req.session.score += isCorrect ? 1 : 0;

  // Get a new random question and its answers
  const question = await Question.findOne({
    include: [Answer],
    order: sequelize.random(),
  });

  // Shuffle the answers
  shuffleArray(question.answers);

  // Render the quiz view with the new question and answers
  res.render('quiz', {
    question,
    isCorrect,
    score: req.session.score,
  });
});

module.exports = router;