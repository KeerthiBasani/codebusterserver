import { Router } from "express";
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  
} from "../controller/user";

const router = Router();

router.get("/users", getUsers);

router.get("/users/:id", getUser);

router.post("/users", createUser);

router.put("/users/:id", updateUser);

export default router;