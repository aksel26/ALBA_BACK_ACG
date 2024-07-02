const express = require("express");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger/swagger.json");
const sequelize = require("./config/database");

const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/user");
const platformRoutes = require("./routes/platform");
const jobPostRoutes = require("./routes/jobPost");
const applicationRoutes = require("./routes/application");

const app = express();

app.use(bodyParser.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/admins", adminRoutes);
app.use("/users", userRoutes);
app.use("/platforms", platformRoutes);
app.use("/job-posts", jobPostRoutes);
app.use("/applications", applicationRoutes);

sequelize
  .sync()
  .then(() => {
    console.log("Database synchronized");
  })
  .catch((error) => {
    console.error("Error synchronizing database:", error);
  });

module.exports = app;
