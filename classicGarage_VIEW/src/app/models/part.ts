import { Car } from "./car";

export class Part {
    id: number;
    name: string;
    catalog_number: number;
    bought_date: String;
    sell_date: String;
    bought_price: number;
    sell_price: number;
    car_Id: number;
    car: Car;
  }