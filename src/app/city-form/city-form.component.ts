import { Component, OnInit, Input } from '@angular/core';
import { CityService } from '../_services/index';
import { CityComponent } from '../city/city.component';

@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.css']
})
export class CityFormComponent implements OnInit {
  
  @Input() name: any;
  cityModel = {
  	"state_id" : 1,
  	"country_id" : 1
  };

  constructor(
  	private CityService: CityService,
  	private _parentComponent: CityComponent

  ) { }

  ngOnInit() {
  }  
  
  private createOrUpdateCity() {
  	console.log(this.cityModel);
  	this.CityService.createCity(this.cityModel).subscribe(city => {
  		this._parentComponent.getCity();  		
  	});
  }
  
  private updateCity(cityData) {
  	console.log(cityData);
  	this.CityService.updateCity(cityData).subscribe(data => { 
  		this._parentComponent.getCity();
  	});    
  }
}
