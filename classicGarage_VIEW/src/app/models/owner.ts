import { Car } from '../models/car';
import { Ad } from '../models/ad';

export class Owner {
    id: number;
    firstname: string;
    lastname: string;
    phone: number;
    email: string;
    cars: Car[];
    ads: Ad[];
  }