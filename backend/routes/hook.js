const express = require("express");
const router = express.Router();

const { generateHookController } = require("../controllers/hookController"); // ✅ Correct destructuring

router.post("/hook", generateHookController); // ✅ Now this is a proper function reference

module.exports = router;
