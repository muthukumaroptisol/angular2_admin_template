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
  cities;
  constructor(private CityService: CityService) { }

  ngOnInit() {
  	this.listPageTitle = "Manage Citywww";
  	this.createCityTitle = " Add City ";
  	this.getCity();
  }

  public getCity() {
  	console.log('I am inside the get city');
  	this.CityService.getCity().subscribe(data =>  { this.cities = data; console.log(this.cities);  });
  }

  private editCity(cityData) {
  	console.log(cityData);
  	// this.CityService.getCityBasedOnId().subscribe(data => this.cities = data);
  }
}
