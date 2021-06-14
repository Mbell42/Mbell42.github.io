//DEPENDENCIES
const path = require("path");
const router = require("express").Router();

//If no API routes are hit, serve homepage
router.use(function(req,res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;