import { Car } from "./car";

export class Repair {
    id: number;
    name: string;
    description: string;
    cost: number;
    car_Id: number;
    car: Car;
  }