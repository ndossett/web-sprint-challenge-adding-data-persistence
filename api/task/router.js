// build your `/api/tasks` router here
const express = require("express");

const router = express.Router();

const Tasks = require("./model");

router.get("/", async (_, res) => {
    try {
        const data = await Tasks.get();
        res.status(200).json(data);
    } catch(err) {
        res.status(404).json(err.message);
    }
});

router.post("/", validatePost, async (req, res) => {
    try {
        const data = await Tasks.create(req.body);
        res.status(201).json(data);
    } catch (err) {
        res.status(404).json(err.message);
    }
});

function validatePost(req, res, next) {
    if(!req.body.description ||  !req.body.project_id) {
        res.status(400).json({message: "description and project id required"});
    } else {
        next();
    }
}



module.exports = router;