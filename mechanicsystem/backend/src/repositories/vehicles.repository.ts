import { prisma } from "../utils/prisma";

export const vehicleRepository = {
  // ============================
  // CAR CRUD
  // ============================

  async findAllCars() {
    return prisma.car.findMany();
  },

  async findCarById(id: string) {
    return prisma.car.findUnique({ where: { id } });
  },

  async createCar(data: any) {
    return prisma.car.create({ data });
  },

  async updateCar(id: string, data: any) {
    return prisma.car.update({
      where: { id },
      data,
    });
  },

  async deleteCar(id: string) {
    return prisma.car.delete({ where: { id } });
  },

  // ============================
  // TRUCK CRUD
  // ============================

  async findAllTrucks() {
    return prisma.truck.findMany();
  },

  async findTruckById(id: string) {
    return prisma.truck.findUnique({ where: { id } });
  },

  async createTruck(data: any) {
    return prisma.truck.create({ data });
  },

  async updateTruck(id: string, data: any) {
    return prisma.truck.update({
      where: { id },
      data,
    });
  },

  async deleteTruck(id: string) {
    return prisma.truck.delete({ where: { id } });
  }
};
