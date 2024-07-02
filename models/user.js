const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define(
  "User",
  {
    email: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    name: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    address: DataTypes.STRING,
    date_of_birth: DataTypes.DATE,
    experience: { type: DataTypes.INTEGER, defaultValue: 0 },
    warnings: { type: DataTypes.INTEGER, defaultValue: 0 },
    gender: DataTypes.ENUM("Male", "Female", "Other"),
    special_notes: DataTypes.TEXT,
    join_date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    device_token: DataTypes.STRING,
    is_approved: { type: DataTypes.BOOLEAN, defaultValue: false },
    is_dormant: { type: DataTypes.BOOLEAN, defaultValue: false },
    last_login: DataTypes.DATE,
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  {
    timestamps: false,
    tableName: "User",
  }
);

module.exports = User;
