const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Bookmark route working");
});

module.exports = router;