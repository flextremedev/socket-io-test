const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
    res.send(`${res.statusCode}:${req.protocol}`);
});
module.exports = router;
