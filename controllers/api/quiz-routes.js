const router = require('express').Router();
const { Question, Answer } = require('../../models');

// Middleware to shuffle an array in place
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

router.get('/', async (req, res) => {
  console.log("Are we here?")
  const questions = await Question.findAll({
    include: [Answer],
  });

  if (!questions) {
    res.send('There are no questions in the database.');
    return;
  }

  req.session.score = 0;
  // req.session.questionId = question.id;

  // const question_1 = questions[Math.floor(Math.random() * (50))]
  // const question_2 = questions[Math.floor(Math.random() * (50))]
  // const question_3 = questions[Math.floor(Math.random() * (50))]
  // const question_4 = questions[Math.floor(Math.random() * (50))]
  // const question_5 = questions[Math.floor(Math.random() * (50))]

  shuffleArray(questions)

  res.json(
    questions
  );

  console.log("response sent")
});

// router.post('/', async (req, res) => {
//   const { answer } = req.body;
//   const questionId = req.session.questionId;
//   const question = await Question.findByPk(questionId, {
//     include: [Answer],
//   });

//   console.log('question:', question);
//   console.log('questionId:', questionId);

//   const selectedAnswer = question.answers.find(
//     (ans) => ans.answer_choice === answer
//   );

//   console.log('selectedAnswer:', selectedAnswer);

//   let isCorrect;
//   if (selectedAnswer.is_correct) {
//     req.session.score++;
//     isCorrect = true;
//   } else {
//     isCorrect = false;
//   }

//   const newQuestion = await Question.findOne({
//     where: {
//       id: { [Op.not]: questionId },
//     },
//     include: [Answer],
//     order: sequelize.random(),
//   });

//   console.log('newQuestion:', newQuestion);

//   if (!newQuestion) {
//     res.send('There are no more questions in the database.');
//     return;
//   }

//   shuffleArray(newQuestion.answers);

//   req.session.questionId = newQuestion.id;

//   res.render('quiz', {
//     question: newQuestion,
//     score: req.session.score,
//     isCorrect,
//   });
// });

module.exports = router;