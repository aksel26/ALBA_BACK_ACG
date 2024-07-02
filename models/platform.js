const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Platform = sequelize.define(
  "Platform",
  {
    name: { type: DataTypes.STRING, allowNull: false },
  },
  {
    timestamps: false,
    tableName: "Platform",
  }
);

module.exports = Platform;
