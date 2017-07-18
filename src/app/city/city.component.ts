import { Component, OnInit } from '@angular/core';
import { CityService } from '../_services/index';
//import { CityFormComponent } from '../city-form/city-form.component';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']

})

export class CityComponent implements OnInit {
  listPageTitle: any;
  createCityTitle: any;
  cities;
  editCityObject: any;
  labelForAdding: string;
  cityModel = {
    "city_name" : "",
    "state_id" : 1,
    "country_id" : 1
  };

  constructor(
    private CityService: CityService
    // private CityFormComponent: CityFormComponent
  ) { }

  ngOnInit() {
  	this.listPageTitle = "Manage City";
  	this.createCityTitle = " Add City ";
    this.labelForAdding = "Add City";
  	this.getCity();
  }

  private editCity(cityData) {
    console.log(cityData);
    this.labelForAdding = "Edit City";
    this.cityModel = cityData;
        
  }

  public getCity() {
  	console.log('I am inside the get city');
  	this.CityService.getCity().subscribe(data =>  { this.cities = data; console.log(this.cities);  });
  }

  private createCity() {
    /*console.log('I am in createOrUpdateCity');
    console.log(this.cityModel);
    console.log(this.labelForAdding);
    if(this.labelForAdding === 'Add City') {
      this.CityService.createCity(this.cityModel).subscribe(city => {
        this.getCity();      
      });
    } else if(this.labelForAdding === 'Edit City') {
      this.CityService.updateCity(this.cityModel).subscribe(city => {
        this.getCity();      
      });
    }*/
    this.CityService.createCity(this.cityModel).subscribe(city => {
        this.getCity();      
      });
    
  }
  
  private updateCity() {
   this.CityService.updateCity(this.cityModel).subscribe(data => { 
      this.getCity();
    });    
  }

}