import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, Response } from "@angular/http";

@Injectable()

export class UserService {
	users;
	constructor(private http: Http) {

	}
	getAllFromArray() {
		return this.users = [ 
		  	{firstName:"Muthu kumar", lastName: "Marichamy", email: "muthu.marichamy@microexcel.com"},
		  	{firstName:"Sanush", lastName: "Muthu kumar", email: "sanush@gmail.com"},
		  	{firstName:"Ashwath", lastName: "Muthu kumar", email: "ashwath@gmail.com"},
		  	{firstName:"Kumar", lastName: "Muthu kumar", email: "kumar@gmail.com"}
		  ];
	}
} 