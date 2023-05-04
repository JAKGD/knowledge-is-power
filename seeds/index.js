const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedQuestions = require('./questionData');
const seedAnswers = require('./answerData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedQuestions();

  await seedAnswers();

  process.exit(0);
};

seedAll();
