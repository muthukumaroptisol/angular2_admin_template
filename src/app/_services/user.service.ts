import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, Response } from "@angular/http";

@Injectable()

export class UserService {
	users;
	private url;
	constructor(private http: Http) {
		this.url = 'http://45.55.48.150:1347';
	}
	getAllFromArray() {
		return this.users = [ 
		  	{firstName:"Muthu kumar", lastName: "Marichamy", email: "muthu.marichamy@microexcel.com"},
		  	{firstName:"Sanush", lastName: "Muthu kumar", email: "sanush@gmail.com"},
		  	{firstName:"Ashwath", lastName: "Muthu kumar", email: "ashwath@gmail.com"},
		  	{firstName:"Kumar", lastName: "Muthu kumar", email: "kumar@gmail.com"}
		  ];
	}

	getUsers() {
		return this.http.get(this.url+'/listUser?user_type=1',this.jwt()).map((response: Response) => response.json());
	}

	private jwt() {
		let currentUserToken = localStorage.getItem('currentUserToken');
		console.log(currentUserToken);
		console.log("Current user-->");
		if(currentUserToken) {
			let headers = new Headers({ 'Authorization' : 'Bearer ' + currentUserToken});
			return new RequestOptions({headers: headers });
		}
	}

	createUserArray() {
		
	}


} 