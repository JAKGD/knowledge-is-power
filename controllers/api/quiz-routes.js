// const router = require('express').Router();
// const sequelize = require('sequelize');
// const { Question, Answer } = require('../../models');
// const session = require('express-session');

// // Middleware to shuffle an array in place
// const shuffleArray = (array) => {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// };


// // router.get('/quiz', async (req, res) => {
// //   if (!req.session.userId) {
// //     res.redirect('/login'); // Redirect to login if user is not logged in
// //     return;
// //   }

// //   const question = await Question.findOne({

// //     include: [Answer],
// //   });

// //   if (!questions) {
// //     res.send('There are no questions in the database.');
// //     return;
// //   }

// //   req.session.score = 0;
// //   // req.session.questionId = question.id;


// //   res.render('quiz', {
// //     question,
// //     score: req.session.score,
// //   });
// // });

// router.post('/quiz', async (req, res) => {
//   // console.log(req.session)
//   // if (!req.session.userId) {
//   //   res.redirect('/signup'); // Redirect to signup if user is not logged in
//   //   return;
//   // }

//   const { answerId } = req.body;
//   console.log("answerId", answerId)

  
//   const questionId = req.body.questionId
//   console.log(questionId)
//   const question = await Question.findByPk(questionId, {
//     include: [Answer],
//   });
// console.log(question)
//   const selectedAnswer = question.answers.find(
//     (ans) => ans.answer_choice === answerId
//   );

//   let isCorrect;
//   if (selectedAnswer.is_correct) {
//     req.session.score++;
//     isCorrect = true;
//   } else {
//     isCorrect = false;
//   }

//   const newQuestion = await Question.findOne({
//     where: {
//       id: { [sequelize.Op.not]: questionId },
//     },
//     include: [Answer],
//    // order: sequelize.random(),
//   });

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

// module.exports = router;
