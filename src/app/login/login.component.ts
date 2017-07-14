import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../_services/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginModel: any = {};
  returnUrl: string;
  

  constructor(
  		private AuthService: AuthenticationService,
  		private router: ActivatedRoute,
  		private route: Router
  	) { }

  ngOnInit() { }

  loginCheck() {
  	console.log("YYYYYYYYYYYYYYYY");
  	this.AuthService.checkAuthentication(this.loginModel.email,this.loginModel.password)
  	.subscribe(user => {
  		if(user && user.token) {
  			  localStorage.setItem('currentUserToken', user.token);
          this.route.navigate(['/index'], { queryParams: { test:4444}});
  		} else {
  			console.log('Username and password is wrong');
  		}

  	}, error => {
  		console.log(error);
  	});
  }

}
