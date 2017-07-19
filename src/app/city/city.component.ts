import { Component, OnInit } from '@angular/core';
import { CityService } from '../_services/index';
import { State } from '../_model/state';
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
  showMessage: number;
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
    this.getCityCount();
  }

  private editCity(cityData) {
    console.log(cityData);
    this.labelForAdding = "Edit City";
    this.cityModel = cityData;
        
  }

  public getCity() {
  	console.log('I am inside the get city');
  	this.CityService.getCity().subscribe(data =>  
      { 
        this.cities = data; console.log(this.cities);
      }, err => console.log(err));
  }

  // This is checking for observables
  private getCityCount() {
    this.CityService.getCityCount().subscribe(data => console.log('OBservanle test-->'+data));
  }

  private createCity() {    
    this.CityService.createCity(this.cityModel).subscribe(city => {
        this.getCity();      
      });    
  }
  
  private updateCity() {
    console.log(this.cityModel);
   this.CityService.updateCity(this.cityModel).subscribe(data => { 
      this.getCity();
    });    
  }

  public onNotifiyClicked(message:number): void {
     this.showMessage = message;
     console.log("onNotifyClicked");
     this.cityModel.state_id = message;
     console.log("===========================");
     console.log(this.showMessage);
     //console.log(this.cityModel);
     console.log("===========================");
  }
}