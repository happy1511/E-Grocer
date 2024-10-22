const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "mysql",
  host: process.env.MYSQL_CONNECTION_STRING,
  username: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.SQL_PORT,
});

sequelize.sync();
module.exports = { sequelize };
