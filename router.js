const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({ message: "Get Request Accepted" });
});

router.post("/", (req, res, next) => {
  res.json({ message: "POST Request Accepted" });
});

router.put("/", (req, res, next) => {
  res.json({ message: "PUT Request Accepted" });
});

router.patch("/", (req, res, next) => {
  res.json({ message: "PACTH Request Accepted" });
});

router.delete("/", (req, res, next) => {
  res.json({ message: `DELETE Request Accepted${req.query.id}` });
});

module.exports = router;
