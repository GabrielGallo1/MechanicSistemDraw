import { Request, Response } from "express";
import { MechanicService } from "../services/mechanic.service";

export class MechanicController {
  private service = new MechanicService();

  private validateId(res: Response, id?: string) {
    if (!id) {
      res.status(400).json({ error: "ID is required" });
      return null;
    }
    return id;
  }

  create = async (req: Request, res: Response) => {
    try {
      const mechanic = await this.service.createMechanic(req.body);
      return res.status(201).json(mechanic);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  };

  list = async (req: Request, res: Response) => {
    try {
      const mechanics = await this.service.listMechanics();
      return res.json(mechanics);
    } catch (error: any) {
      return res.status(500).json({ error: "Failed to list mechanics" });
    }
  };

  get = async (req: Request, res: Response) => {
    const id = this.validateId(res, req.params.id);
    if (!id) return;

    try {
      const mechanic = await this.service.getMechanic(id);
      return res.json(mechanic);
    } catch (error: any) {
      return res.status(404).json({ error: error.message });
    }
  };

  update = async (req: Request, res: Response) => {
    const id = this.validateId(res, req.params.id);
    if (!id) return;

    try {
      const mechanic = await this.service.updateMechanic(id, req.body);
      return res.json(mechanic);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  };

  delete = async (req: Request, res: Response) => {
    const id = this.validateId(res, req.params.id);
    if (!id) return;

    try {
      await this.service.deleteMechanic(id);
      return res.status(204).send();
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  };
}
