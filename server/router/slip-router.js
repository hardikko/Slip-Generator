// firm-router.js
const express = require('express');
const router = express.Router();
const slipController = require("../controller/slip-controller");

router.post("/add-slip", slipController.AddSlip);
router.get("/view-slip/:slip_no", slipController.ViewSlip);


module.exports = router;
