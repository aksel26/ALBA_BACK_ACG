const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./user");
const JobPost = require("./jobPost");

const Application = sequelize.define(
  "Application",
  {
    user_id: {
      type: DataTypes.INTEGER,
      references: { model: User, key: "id" },
    },
    job_post_id: {
      type: DataTypes.INTEGER,
      references: { model: JobPost, key: "id" },
    },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    status: {
      type: DataTypes.ENUM("Pending", "Approved", "Rejected"),
      defaultValue: "Pending",
    },
  },
  {
    timestamps: false,
    tableName: "Application",
  }
);

module.exports = Application;
