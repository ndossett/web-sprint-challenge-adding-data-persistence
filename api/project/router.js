// build your `/api/projects` router here
const express = require("express");

const router = express.Router();

const Project = require("./model");

router.get("/", async (_, res) => {
    try {
        const data = await Project.get();
        res.status(200).json(data);
    } catch(err) {
        res.status(404).json(err.message);
    }
});

router.post("/", async (req, res) => {
    try {
        const data = await Project.create(req.body);
        res.status(201).json(data);
    } catch (err) {
        res.status(404).json(err.message);
    }
});

module.exports = router;
