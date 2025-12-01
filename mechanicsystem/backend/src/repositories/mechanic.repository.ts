import { prisma } from "../utils/prisma";

export class MechanicRepository {
  create(data: any) {
    return prisma.mechanic.create({ data });
  }

  findAll() {
    return prisma.mechanic.findMany({
      include: {
        workorders: true,
      },
    });
  }

  findById(id: string) {
    return prisma.mechanic.findUnique({
      where: { id },
      include: { workorders: true },
    });
  }

  findByDocument(document: string) {
    return prisma.mechanic.findUnique({
      where: { document },
    });
  }

  update(id: string, data: any) {
    return prisma.mechanic.update({
      where: { id },
      data,
    });
  }

  delete(id: string) {
    return prisma.mechanic.delete({
      where: { id },
    });
  }
}
