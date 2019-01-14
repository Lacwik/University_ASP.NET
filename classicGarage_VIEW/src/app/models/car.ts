import { Owner } from "./Owner";
import { Part } from "./part";
import { Repair } from "./repair";

export class Car {
    id: number;
    brand: string;
    model: string;
    year: number;
    vin: number;
    series: number;
    photo: string;
    bought_date: string;
    sell_date: string;
    bought_price: number;
    sell_price: number;
    owner_Id: number;
    parts: Part[];
    repairs: Repair[];
    owner: Owner;
  }