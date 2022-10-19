const router = require("express").Router();

router.get("/userget", (req, res) => {
  res.send("user test is successful");
});

router.post("/userpost", (req, res) => {
  const username = req.body.username;
  res.send(`Welcome ${username}`);
});

module.exports = router;
