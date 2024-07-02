const express = require("express");
const Application = require("../models/application");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const application = await Application.create(req.body);
    res.status(201).json(application);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const application = await Application.findByPk(req.params.id);
    await application.update(req.body);
    res.status(200).json(application);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/user/:user_id", async (req, res) => {
  try {
    const applications = await Application.findAll({
      where: { user_id: req.params.user_id },
    });
    res.status(200).json(applications);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
