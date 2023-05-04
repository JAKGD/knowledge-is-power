const router = require('express').Router();

const questionRoutes = require('./question-routes');
const answerRoutes = require('./answer-routes');
const userRoutes = require('./user-routes');

router.use('/question', questionRoutes);
router.use('/answer', answerRoutes);
router.use('/user', userRoutes);

module.exports = router;
