import { Component, OnInit } from '@angular/core';
/*import { UserService } from '../_services/index';*/
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  listUserTitle;
  createUserTitle;
  users;  
  userModel: any = {};

  constructor(private UserService:UserService) { 
  	console.log('Inside constructore');
  	this.listUserTitle = "User list";
  }

  ngOnInit() {
  	this.createUserTitle = "Add User";
  	this.users = this.UserService.getAllFromArray();  	
  }

  createUser() {
  	/*console.log(this.userModel);
  	this.users.push(this.userModel);
  	this.userModel = {};*/
  }

}
