import { Router } from "express";
import item from "../controllers/item.controller.js";
const router = Router()

router.get("/", item.getAll);
router.post("/", item.store);
router.get("/:id", item.find);
router.put("/:id", item.update);
router.delete("/:id", item.destroy);

export default router;