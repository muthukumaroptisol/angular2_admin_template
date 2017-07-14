import { Component, OnInit } from '@angular/core';
/*import { UserService } from '../_services/index';*/
import { UserService } from '../_services/index';

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
  	//this.users = this.UserService.getAllFromArray();
    this.loadUsers();  	
  }

  private createUser() {
  	this.users.push(this.userModel);
  	this.userModel = {};
  }

  private loadUsers() {
    this.UserService.getUsers().subscribe(data => this.users = data);
  }
}
