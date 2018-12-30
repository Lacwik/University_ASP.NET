import { Component, OnInit } from '@angular/core';
import { NbSearchService } from '@nebular/theme';
import { OwnerService } from '../../services/owner.service';
import { CarService } from '../../services/car.service';
import { AdService } from '../../services/ad.service';
import { Owner } from '../../models/Owner';
import { Car } from 'src/app/models/car';
import { Ad } from 'src/app/models/ad';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  owners: Owner[];
  current_owner: Owner;
  current_cars: Car[];
  cars: Car[];
  current_car: Car;
  ads: Ad[];
  current_ad: Ad;
  imagesUrl: string[];
  mSpanColor: string;
  search_value: string;

  constructor(
    private ownerService: OwnerService,
    private carService: CarService,
    private adService: AdService,
  ) { }

  getCars(): void{
    this.carService.getCars()
        .subscribe( cars => this.cars = cars);
  }

  getCar(id: number): void{
    this.carService.getCar(id)
        .subscribe( car => this.current_car = car);
  }


  onSelectCar(car: Car): void {
    this.current_car = car;
  }

  onMouseOver(): void {
    this.mSpanColor = "#FF0000";
  }

  onMouseOut(): void {
    this.mSpanColor = "#000000";
  }

  getOwners(): void{
    this.ownerService.getOwners()
        .subscribe( owners => this.owners = owners);
  }

  getAds(): void{
    this.adService.getAds()
        .subscribe( ads => this.ads = ads);
  }

  ngOnInit() {
    this.getOwners();
    this.getCars();
  }

}
