const express = require("express");
const dotenv = require("dotenv");

const projects = require("./data/projects");

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Working API");
});

app.get("/api/projects", (req, res) => {
  res.json(projects);
});

app.get("/api/projects/:id", (req, res) => {
  const project = project.find((p) => p._id === req.params.id);
  res.json(projects);
});

const PORT = process.env.PORT || 5000;
const MODE = process.env.NODE_ENV;
app.listen(PORT, console.log(`Server running well in ${MODE} mode on port ${PORT} boss`));
