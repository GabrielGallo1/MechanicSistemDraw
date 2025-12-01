import { Request, Response } from "express";
import { WorkOrdersService } from "../services/workorders.service";

export class WorkOrdersController {
  private service = new WorkOrdersService();

  list = async (req: Request, res: Response) => {
    const data = await this.service.list();
    res.json(data);
  };

  get = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "ID is required" });
    }

    const data = await this.service.get(id);
    res.json(data);
  };

  create = async (req: Request, res: Response) => {
    const data = await this.service.create(req.body);
    res.status(201).json(data);
  };

  update = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "ID is required" });
    }

    const data = await this.service.update(id, req.body);
    res.json(data);
  };

  delete = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "ID is required" });
    }

    await this.service.delete(id);
    res.status(204).send();
  };
}

export const workordersController = new WorkOrdersController();
