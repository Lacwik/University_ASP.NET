import { Component, OnInit } from '@angular/core';

const PAGES: String[] = [
  "owners",
  "cars",
  "config"
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pages = [];

  constructor() { }

  ngOnInit() {
    this.pages = PAGES;
  }

}
