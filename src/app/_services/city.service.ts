import { Injectable } from '@angular/core';
import { Http, Request, Response } from '@angular/http';
import { Config } from "./config.service";

@Injectable()
export class CityService {
	url :string;
	constructor (
			private http: Http,
			private config: Config
	) {	}

	getCity() {
		return this.http.get(this.config.apiUrl+'/listCity',this.config.jwt()).map((response: Response) => response.json());		
	}
}