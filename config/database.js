const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("JobPlatformDB", "hmkim", "acghr2467!", {
  host: "localhost",
  dialect: "mariadb",
});

module.exports = sequelize;
