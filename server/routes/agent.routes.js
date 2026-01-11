const express = require("express");
const adminAuth = require("../middleware/adminAuth");
const { addAgent, listAgents } = require("../contollers/agent.controllers");

const router = express.Router();

router.post("/", adminAuth, addAgent);
router.get("/", adminAuth, listAgents);

module.exports = router;
