const router = require('express').Router();

const quizRoutes = require('./quiz-routes');
const answerRoutes = require('./answer-routes');
const userRoutes = require('./user-routes');

router.use('/question', quizRoutes);
router.use('/answer', answerRoutes);
router.use('/user', userRoutes);

module.exports = router;
