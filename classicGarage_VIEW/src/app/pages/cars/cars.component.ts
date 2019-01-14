import { Component, OnInit, Input, TemplateRef  } from '@angular/core';
import { NbSearchService } from '@nebular/theme';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { OwnerService } from '../../services/owner.service';
import { CarService } from '../../services/car.service';
import { AdService } from '../../services/ad.service';
import { RepairService } from '../../services/repair.service';
import { PartService } from '../../services/part.service';
import { Owner } from '../../models/Owner';
import { Car } from 'src/app/models/car';
import { Ad } from 'src/app/models/ad';
import { Repair } from 'src/app/models/repair';
import { Part } from 'src/app/models/part';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  current_owner: Owner;
  current_car: Car; 
  current_ad: Ad;
  current_repair: Repair;
  current_part: Part;

  current_car_repairs: Repair[];
  current_car_parts: Part[];

  cars: Car[];
  owners: Owner[];
  ads: Ad[];
  repairs: Repair[];
  parts: Part[];

  imagesUrl: string[];
  mSpanColor: string;
  search_value: string;
  details_option: boolean;

  constructor(
    private ownerService: OwnerService,
    private carService: CarService,
    private adService: AdService,
    private repairService: RepairService,
    private partService: PartService,
    private dialogService: NbDialogService
  ) { }

  getCars(): void{
    this.carService.getCars()
        .subscribe( cars => this.cars = cars);
  }

  getRepairs(): void{
    this.repairService.getRepairs()
        .subscribe( repairs => this.repairs = repairs);
  }

  getParts(): void{
    this.partService.getParts()
        .subscribe( parts => this.parts = parts);
  }

  getCar(id: number): void{
    this.carService.getCar(id)
        .subscribe( car => this.current_car = car);
  }

  addCar(brand: string): void {
    brand = brand.trim();
    if (!brand) { return; }
    this.carService.putCar({ brand } as Car)
      .subscribe(car => {
        this.cars.push(car);
      });
  }

  updateCar(): void {
    this.carService.postCar(this.current_car).subscribe();
  }
 
  deleteCar(car: Car): void {
    this.cars = this.cars.filter(h => h !== car);
    this.carService.deleteCar(car).subscribe();
  }


  onSelectCar(car: Car): void {
    this.current_car = car;
    this.current_repair = null;
    this.current_part = null;
    this.current_car_repairs = [];
    for(let tmp_repair of this.repairs){
      if(tmp_repair.car_Id == this.current_car.id){
        this.current_car_repairs.push(tmp_repair);
      }
    }
    this.current_car_parts = [];
    for(let tmp_part of this.parts){
      if(tmp_part.car_Id == this.current_car.id){
        this.current_car_parts.push(tmp_part);
      }
    }
  }

  onSelectRepair(repair: Repair): void {
    this.current_repair = repair;
  }

  onSelectPart(part: Part, dialog: TemplateRef<any>): void {
    this.current_part = part;
    this.dialogService.open(dialog);
  }


  onClickOptions_repairs(): void {
    this.details_option = true;
  }

  onClickOptions_parts(): void {
    this.details_option = false;
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
    this.getAds();
    this.getRepairs();
    this.getParts();
    this.current_car = null;
    this.search_value = '';
    this.details_option = true;
  }

}
