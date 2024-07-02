const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Admin = require("./admin");
const Platform = require("./platform");

const JobPost = sequelize.define(
  "JobPost",
  {
    admin_id: {
      type: DataTypes.INTEGER,
      references: { model: Admin, key: "id" },
    },
    platform_id: {
      type: DataTypes.INTEGER,
      references: { model: Platform, key: "id" },
    },
    title: { type: DataTypes.STRING, allowNull: false },
    description: DataTypes.TEXT,
    details: DataTypes.TEXT,
    dress_code: DataTypes.STRING,
    type: { type: DataTypes.ENUM("Offline", "Online"), allowNull: false },
    post_sDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    post_eDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    lunch_sDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    lunch_eDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    post_duration: DataTypes.STRING,
    lunch_break: DataTypes.STRING,
    max_applicants: DataTypes.INTEGER,
    location: DataTypes.STRING,
    wage: DataTypes.INTEGER,
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  {
    timestamps: false,
    tableName: "JobPost",
  }
);

module.exports = JobPost;
