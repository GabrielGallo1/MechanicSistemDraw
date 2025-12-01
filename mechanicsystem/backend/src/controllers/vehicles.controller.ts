import { Request, Response } from "express";
import { VehicleService } from "../services/vehicles.service";

export class VehicleController {
  private service = new VehicleService();

  private validateType(res: Response, type?: string) {
    if (!type || !["car", "truck"].includes(type)) {
      res.status(400).json({ error: "Invalid vehicle type" });
      return null;
    }
    return type as "car" | "truck";
  }

  private validateId(res: Response, id?: string) {
    if (!id) {
      res.status(400).json({ error: "ID is required" });
      return null;
    }
    return id;
  }

  list = async (req: Request, res: Response) => {
    const type = this.validateType(res, req.params.type);
    if (!type) return;

    const data = await this.service.list(type);
    res.json(data);
  };

  get = async (req: Request, res: Response) => {
    const type = this.validateType(res, req.params.type);
    if (!type) return;

    const id = this.validateId(res, req.params.id);
    if (!id) return;

    const data = await this.service.get(type, id);
    res.json(data);
  };

  create = async (req: Request, res: Response) => {
    const type = this.validateType(res, req.params.type);
    if (!type) return;

    const data = await this.service.create(type, req.body);
    res.status(201).json(data);
  };

  update = async (req: Request, res: Response) => {
    const type = this.validateType(res, req.params.type);
    if (!type) return;

    const id = this.validateId(res, req.params.id);
    if (!id) return;

    const data = await this.service.update(type, id, req.body);
    res.json(data);
  };

  delete = async (req: Request, res: Response) => {
    const type = this.validateType(res, req.params.type);
    if (!type) return;

    const id = this.validateId(res, req.params.id);
    if (!id) return;

    await this.service.delete(type, id);
    res.status(204).send();
  };
}

// 👉 ADICIONE ESTA LINHA
export const vehicleController = new VehicleController();
