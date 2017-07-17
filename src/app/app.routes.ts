import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { CityComponent } from './city/city.component';

export const routes: Routes = [
	{
		path: '',
		component: LoginComponent
	},
	{
		path: 'index',
		component: DashboardComponent
	},

	{
		path: 'user',
		component: UserComponent
	},

	{
		path: 'city',
		component: CityComponent
	}
]