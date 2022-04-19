const express = require("express");
const app = express();
const projects = require("./data/projects");

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

const port = 5000;

app.listen(port, console.log(`Server running on port ${port} boss`));
