const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Answer extends Model {}

Answer.init(
  {
    question_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'question',
        key: 'id',
      },
    },
    answer_choice: {
        type: DataTypes.STRING,
        allowNull: false, 
      },
    is_correct: {
        type: DataTypes.BOOLEAN,
        allowNull: false,    
    },
    answer_key: {
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    }, 
    
  },
  {
    sequelize,
    timestamps: true, 
    freezeTableName: true,
    underscored: true,
    modelName: 'answer',
  }
);

module.exports = Answer;