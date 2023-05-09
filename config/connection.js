//-- Importing the Sequelize library and the dotenv library--//
//-- The sequelize variable is created by passing either the JAWSDB_URL or the local MySQL database--//
//-- he constructor creates a connection to the local database using the dialect 'mysql' and the provided credentials--//
//-- the sequelize variable is exported from the module, allowing it to be used by other modules in the application for querying the database--//


/*const Sequelize = require('sequelize');
require('dotenv').config(); 

const sequelize = process.env.CLEARDB_DATABASE_URL
  ? new Sequelize(process.env.CLEARDB_DATABASE_URL) 
  : new Sequelize(process.env.DB_NAME, process.env.dkpatzer, process.env.DB_%AngelYukZel78$$, { 
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;


const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});
*/

//  const Sequelize = require('sequelize');

const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  });
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {
      decimalNumbers: true,
    },
  });
}

module.exports = sequelize;

