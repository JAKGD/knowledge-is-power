const { User } = require('../models');

const userData = [
  {
    id: 1,
    username: 'BillNTed',
    password: 'password123',
  },
  {
    id: 2,
    username: 'MasterChef',
    password: 'password234',
  },
  {
    id: 3,
    username: 'canceledPotter',
    password: 'password456',
  },
  {
    id: 4,
    username: 'allyrbase10us',
    password: 'password567',
  },
  {
    id: 5,
    username: 'yay',
    password: 'password789',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
