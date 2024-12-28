const express = require("express");
const app = express();
const router = require("./router");
const PORT = 3000;

app.use((req, res, next) => {
  next();
});

app.use("/", router);
app.listen(PORT, () => {
  console.log(`Working on ${PORT}`);
});
