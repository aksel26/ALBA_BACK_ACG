const express = require("express");
const User = require("../models/user");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put("/:id/approve", async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    user.is_approved = req.body.is_approved;
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put("/:id/dormant", async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    user.is_dormant = true;
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
