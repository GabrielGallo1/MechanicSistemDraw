import { Router } from "express";
import { workordersController } from "../controllers/workorders.controller";

const router = Router();

router.get("/", workordersController.list);
router.get("/:id", workordersController.get);
router.post("/", workordersController.create);
router.put("/:id", workordersController.update);
router.delete("/:id", workordersController.delete);

export default router;
