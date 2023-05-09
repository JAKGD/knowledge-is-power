const router = require('express').Router();
const { Question } = require('../../models');

// GET route for retrieving a random question
router.get('/random', async (req, res) => {
  try {
    // Find the total count of questions in the database
    const count = await Question.count();

    // Generate a random number between 0 and the total count of questions
    const randomIndex = Math.floor(Math.random() * count);

    // Retrieve a single random question from the database
    const randomQuestion = await Question.findOne().skip(randomIndex);

    res.status(200).json(randomQuestion);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;



// const router = require('express').Router();
// const { Question } = require('../../models');


// module.exports = router;