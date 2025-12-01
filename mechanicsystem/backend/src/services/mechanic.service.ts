import { MechanicRepository } from "../repositories/mechanic.repository";

export class MechanicService {
  private repo = new MechanicRepository();

  async createMechanic(data: any) {
    const exists = await this.repo.findByDocument(data.document);
    if (exists) throw new Error("Mechanic already exists");

    return this.repo.create(data);
  }

  async listMechanics() {
    return this.repo.findAll();
  }

  async getMechanic(id: string) {
    const mechanic = await this.repo.findById(id);
    if (!mechanic) throw new Error("Mechanic not found");
    return mechanic;
  }

  async updateMechanic(id: string, data: any) {
    await this.getMechanic(id);
    return this.repo.update(id, data);
  }

  async deleteMechanic(id: string) {
    await this.getMechanic(id);
    return this.repo.delete(id);
  }
}
