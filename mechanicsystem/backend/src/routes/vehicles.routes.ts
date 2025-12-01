import { Router } from "express";
import { vehicleController } from "../controllers/vehicles.controller";

const router = Router();


router.get("/:type", vehicleController.list);

router.get("/:type/:id", vehicleController.get);

router.post("/:type", vehicleController.create);

router.put("/:type/:id", vehicleController.update);

router.delete("/:type/:id", vehicleController.delete);

export default router;
