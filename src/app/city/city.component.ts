import { Component, OnInit } from '@angular/core';
import { CityService } from '../_services/index';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})

export class CityComponent implements OnInit {
  listPageTitle: any;
  createCityTitle: any;
  city: any = {};
  constructor(private CityService: CityService) { }

  ngOnInit() {
  	this.listPageTitle = "Manage Citywww";
  	this.createCityTitle = " Add City ";
  	this.getCity();
  }

  private getCity() {
  	console.log('I am inside the get city');
  	this.CityService.getCity().subscribe(data => this.city = data);
  }
}
