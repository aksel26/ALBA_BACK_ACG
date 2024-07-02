const express = require("express");
const JobPost = require("../models/jobPost");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const jobPost = await JobPost.create(req.body);
    res.status(201).json(jobPost);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const jobPost = await JobPost.findByPk(req.params.id);
    await jobPost.update(req.body);
    res.status(200).json(jobPost);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const jobPost = await JobPost.findByPk(req.params.id);
    await jobPost.destroy();
    res.status(204).json();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const jobPosts = await JobPost.findAll();
    res.status(200).json(jobPosts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const jobPost = await JobPost.findByPk(req.params.id);
    res.status(200).json(jobPost);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
