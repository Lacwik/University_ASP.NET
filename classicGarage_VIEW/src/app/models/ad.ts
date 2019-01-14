import { Owner } from '../models/owner';

export class Ad {
    id: number;
    car_id: number;
    active: boolean;
    owner_Id: number;
    owner: Owner;
  }