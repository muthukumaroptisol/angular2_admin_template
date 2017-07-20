import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {
	submitted = false;
	active = true;
	country: any = {};
	countryList: any = [];

	constructor( ) { }

	ngOnInit() {
	
	}

	onSubmit() {
		console.log(this.country);
		this.countryList.push({
			name:this.country.name
		});
		console.log(this.countryList);
	}

	addCountry() {

	}
}
