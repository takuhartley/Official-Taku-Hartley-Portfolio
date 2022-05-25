import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").post(registerUser).get(protect, admin, getUsers);
router.post("/login", authUser);
router
  .route("/:id")
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);

export default router;
