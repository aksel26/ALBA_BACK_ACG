const express = require("express");
const Admin = require("../models/admin");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const admin = await Admin.create(req.body);
    res.status(201).json(admin);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/login", async (req, res) => {
  // 로그인 로직 구현
});

module.exports = router;
