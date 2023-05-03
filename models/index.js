const User = require('./User');
const Question = require('./Question');
const Answer = require('./Answer');



Question.hasMany(Answer, {
  foreignKey: 'question_id',
}) 

Answer.belongsTo(Question, {
  foreignKey: 'question_id',
});

// User.hasMany(Post, {
//   foreignKey: 'user_id',
// });

// Post.belongsTo(User, {
//   foreignKey: 'user_id',
// });


// User.hasMany(Comment, {
//   foreignKey: 'user_id',
// });

// Comment.belongsTo(User, {
//   foreignKey: 'user_id',
// });


// Post.hasMany(Comment, {
//   foreignKey: 'post_id',
// });

// Comment.belongsTo(Post, {
//   foreignKey: 'post_id',
// });

module.exports = { User, Question, Answer };
