import { vehicleRepository } from "../repositories/vehicles.repository";

export class VehicleService {
  // 🔹 Lista veículos por tipo
  async list(type: "car" | "truck") {
    if (type === "car") return vehicleRepository.findAllCars();
    return vehicleRepository.findAllTrucks();
  }

  // 🔹 Busca um veículo específico
  async get(type: "car" | "truck", id: string) {
    if (type === "car") return vehicleRepository.findCarById(id);
    return vehicleRepository.findTruckById(id);
  }

  // 🔹 Cria veículo
  async create(type: "car" | "truck", data: any) {
    if (type === "car") return vehicleRepository.createCar(data);
    return vehicleRepository.createTruck(data);
  }

  // 🔹 Atualiza veículo
  async update(type: "car" | "truck", id: string, data: any) {
    if (type === "car") return vehicleRepository.updateCar(id, data);
    return vehicleRepository.updateTruck(id, data);
  }

  // 🔹 Remove veículo
  async delete(type: "car" | "truck", id: string) {
    if (type === "car") return vehicleRepository.deleteCar(id);
    return vehicleRepository.deleteTruck(id);
  }
}
