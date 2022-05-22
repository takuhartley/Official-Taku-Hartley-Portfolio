import express from "express";
const router = express.Router();
import {
  getProjects,
  getProjectById,
} from "../controllers/projectController.js";

router.route("/").get(getProjects);
router.route("/:id").get(getProjectById);
export default router;
