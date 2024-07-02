const express = require("express");
const Platform = require("../models/platform");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const platform = await Platform.create(req.body);
    res.status(201).json(platform);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const platforms = await Platform.findAll();
    res.status(200).json(platforms);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
