import { Router } from "express";
const router = Router()

import itemRouter from "./item.route.js"

router.use("/items", itemRouter)

export default router;