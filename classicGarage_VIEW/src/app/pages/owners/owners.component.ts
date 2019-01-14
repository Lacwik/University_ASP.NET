import { Component, OnInit } from '@angular/core';
import { OwnerService } from '../../services/owner.service';
import { CarService } from '../../services/car.service';
import { AdService } from '../../services/ad.service';
import { Owner } from '../../models/Owner';
import { Car } from 'src/app/models/car';
import { Ad } from 'src/app/models/ad';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css']
})
export class OwnersComponent implements OnInit {

  owners: Owner[];
  current_owner: Owner;
  current_owner_cars: Car[];
  cars: Car[];
  current_car: Car;
  ads: Ad[];
  current_ad: Ad;
  imagesUrl: string[];

  mSpanColor: string;


  constructor(
    private ownerService: OwnerService,
    private carService: CarService,
    private adService: AdService
    ) { }

  getOwners(): void{
    this.ownerService.getOwners()
        .subscribe( owners => this.owners = owners);
  }

  getOwner(id: number): void{
    this.ownerService.getOwner(id)
        .subscribe( owner => this.current_owner = owner);
  }

  getCars(): void{
    this.carService.getCars()
        .subscribe( cars => this.cars = cars);
  }

  getAds(): void{
    this.adService.getAds()
        .subscribe( ads => this.ads = ads);
  }

  onSelectOwner(owner: Owner): void {
    this.current_owner = owner;
    this.current_owner_cars = [];
    for(let tmp_car of this.cars){
      if(tmp_car.owner_Id == owner.id){
        this.current_owner_cars.push(tmp_car);
      }
    }
  }

  onSelectAd(ad: Ad): void {
    this.current_ad = ad;
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

  mockImages(): void {
    this.imagesUrl = [
      "../../../assets/images/cars/owner3/1.jpg",
      "../../../assets/images/cars/owner3/2.jpg",
      "../../../assets/images/cars/owner3/3.jpg",
      "../../../assets/images/cars/owner3/4.jpg",
    ]
  }

  ngOnInit() {
    this.getOwners();
    this.getOwner(3);
    this.mockImages();
    this.getCars();
    this.getAds();
  }

}
