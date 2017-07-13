import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  listUserTitle;
  createUserTitle;
  users = [ 
  	{firstName:"Muthu kumar", lastName: "Marichamy", email: "muthu.marichamy@microexcel.com"},
  	{firstName:"Sanush", lastName: "Muthu kumar", email: "sanush@gmail.com"},
  	{firstName:"Ashwath", lastName: "Muthu kumar", email: "ashwath@gmail.com"},
  	{firstName:"Kumar", lastName: "Muthu kumar", email: "kumar@gmail.com"}
  ];
  userModel: any = {};

  constructor() { 

  	this.listUserTitle = "User list";
  }

  ngOnInit() {
  	this.createUserTitle = "Add User";
  }

  createUser() {
  	console.log(this.userModel);
  	this.users.push(this.userModel);
  	this.userModel = {};
  }

}
