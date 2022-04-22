import express from "express";
const router = express.Router();
import Project from "../models/projectModel.js";

router.get("/", async (req, res) => {
  const projects = await Project.find({});
});

router.get("/:id", (req, res) => {
  const project = project.find((p) => p._id === req.params.id);
  res.json(projects);
});
export default router;
