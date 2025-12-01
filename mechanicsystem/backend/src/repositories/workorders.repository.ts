import { prisma } from "../utils/prisma";

export class WorkOrdersRepository {
  async findAll() {
    return prisma.workorders.findMany({
      include: { mechanic: true },
    });
  }

  async findById(id: string) {
    return prisma.workorders.findUnique({
      where: { id },
      include: { mechanic: true },
    });
  }

  async create(data: any) {
    return prisma.workorders.create({ data });
  }

  async update(id: string, data: any) {
    return prisma.workorders.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return prisma.workorders.delete({
      where: { id },
    });
  }
}
