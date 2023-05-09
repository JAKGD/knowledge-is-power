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
  const question = await Question.findOne({
    include: [Answer],
    order: sequelize.random(),
  });

  if (!question) {
    res.send('There are no questions in the database.');
    return;
  }

  shuffleArray(question.answers);

  req.session.score = 0;
  req.session.questionId = question.id;

  res.render('quiz', {
    question,
    score: req.session.score,
  });
});

router.post('/quiz', async (req, res) => {
  const { answer } = req.body;
  const questionId = req.session.questionId;
  const question = await Question.findByPk(questionId, {
    include: [Answer],
  });

  console.log('question:', question);
  console.log('questionId:', questionId);

  const selectedAnswer = question.answers.find(
    (ans) => ans.answer_choice === answer
  );

  console.log('selectedAnswer:', selectedAnswer);

  let isCorrect;
  if (selectedAnswer.is_correct) {
    req.session.score++;
    isCorrect = true;
  } else {
    isCorrect = false;
  }

  const newQuestion = await Question.findOne({
    where: {
      id: { [Op.not]: questionId },
    },
    include: [Answer],
    order: sequelize.random(),
  });

  console.log('newQuestion:', newQuestion);

  if (!newQuestion) {
    res.send('There are no more questions in the database.');
    return;
  }

  shuffleArray(newQuestion.answers);

  req.session.questionId = newQuestion.id;

  res.render('quiz', {
    question: newQuestion,
    score: req.session.score,
    isCorrect,
  });
});

module.exports = router;