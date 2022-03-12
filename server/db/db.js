const Sequelize = require("sequelize");

const db = new Sequelize("messenger","admin","admin1234",
  {
    host : 'localhost',
    logging: false,
    dialect : 'postgres'
  }
);

module.exports = db;
