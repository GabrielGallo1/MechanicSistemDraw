import { Router } from "express";

import mechanicRoutes from "./mechanic.routes";
import clientRoutes from "./client.routes";
import vehicleRoutes from "./vehicles.routes";
import workordersRoutes from "./workorders.routes";

const routes = Router();

routes.get("/", (req, res) => {
    res.json({ message: "MechanicSystem API is running" })
});

routes.use("/mechanics", mechanicRoutes);
routes.use("/clients", clientRoutes);
routes.use("/vehicles", vehicleRoutes);
routes.use("/workorders", workordersRoutes);

export default routes;
// e149d4c2-16f0-45e7-87b5-bfcf00a7b6bd