import { Router } from "express";
import { MechanicController } from "../controllers/mechanic.controller";

const router = Router();
const controller = new MechanicController();

router.post("/", controller.create);
router.get("/", controller.list);
router.get("/:id", controller.get);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

export default router;
