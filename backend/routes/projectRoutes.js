import express from "express";
import {
  getProjects,
  getProjectById,
} from "../controllers/projectController.js";

const router = express.Router();
router.route("/").get(getProjects);
router.route("/:id").get(getProjectById);

export default router;
