import { prisma } from "../utils/prisma";

export class ClientRepository {
  async create(data: any) {
    const clientData: any = {
      name: data.name,
      document: data.document,
      contact: data.contact,
      address: data.address
    };

    // Só adiciona car se existir
    if (data.car && data.car.length > 0) {
      clientData.car = {
        create: data.car
      };
    }

    // Só adiciona truck se existir
    if (data.truck && data.truck.length > 0) {
      clientData.truck = {
        create: data.truck
      };
    }

    return prisma.client.create({
      data: clientData,
      include: {
        car: true,
        truck: true
      }
    });
  }

  async findAll() {
    return prisma.client.findMany({ include: { car: true, truck: true } });
  }

  async findById(id: string) {
    return prisma.client.findUnique({ where: { id } });
  }

  async update(id: string, data: any) {
    return prisma.client.update({ where: { id }, data });
  }

  async delete(id: string) {
    return prisma.client.delete({ where: { id } });
  }
}
