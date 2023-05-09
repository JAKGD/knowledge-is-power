const router = require('express').Router();

const quizRoutes = require('./quiz-routes');
const userRoutes = require('./user-routes');

router.use('/quiz', quizRoutes);
router.use('/user', userRoutes);

module.exports = router;
