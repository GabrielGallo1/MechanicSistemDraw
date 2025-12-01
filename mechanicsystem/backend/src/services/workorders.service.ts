import { WorkOrdersRepository } from "../repositories/workorders.repository";

export class WorkOrdersService {
  private repo = new WorkOrdersRepository();

  async list() {
    return this.repo.findAll();
  }

  async get(id: string) {
    return this.repo.findById(id);
  }

  async create(data: any) {
    return this.repo.create(data);
  }

  async update(id: string, data: any) {
    return this.repo.update(id, data);
  }

  async delete(id: string) {
    return this.repo.delete(id);
  }
}
