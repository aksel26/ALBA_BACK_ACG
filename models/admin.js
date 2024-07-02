const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Admin = sequelize.define(
  "Admin",
  {
    email: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  {
    timestamps: false,
    tableName: "Admin",
  }
);

module.exports = Admin;
