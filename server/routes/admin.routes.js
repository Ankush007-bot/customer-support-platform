const express = require("express");
const { adminLogin } = require("../contollers/admin.controllers");

const router = express.Router();

router.post("/login", adminLogin);

module.exports = router;
