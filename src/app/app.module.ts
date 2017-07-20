import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }  from '@angular/router';

import { UserService, AuthenticationService, CityService, Config, StateService } from './_services/index';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { routes } from './app.routes';
import { LoginComponent } from './login/login.component';
import { CityComponent } from './city/city.component';
import { StateComponent } from './state/state.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { CityFormComponent } from './city-form/city-form.component';
import { StateDropdownComponent } from './state-dropdown/state-dropdown.component';
import { CountryComponent } from './country/country.component';
import { TestComponentComponent } from './test-component/test-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    TopBarComponent,
    DashboardComponent,
    UserComponent,
    LoginComponent,
    CityComponent,
    StateComponent,
    BreadcrumbComponent,
    CityFormComponent,
    StateDropdownComponent,
    CountryComponent,
    TestComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    UserService,
    AuthenticationService,
    CityService,
    Config,
    StateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
