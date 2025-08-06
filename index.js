const express = require("express");
const app = require("express")();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello from WireCore Solutions!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
