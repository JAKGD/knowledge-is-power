//-- Importing the Sequelize library and the dotenv library--//
//-- The sequelize variable is created by passing either the JAWSDB_URL or the local MySQL database--//
//-- he constructor creates a connection to the local database using the dialect 'mysql' and the provided credentials--//
//-- the sequelize variable is exported from the module, allowing it to be used by other modules in the application for querying the database--//


const Sequelize = require('sequelize');
require('dotenv').config();
// create connection to our db
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
    
  });
module.exports = sequelize;
