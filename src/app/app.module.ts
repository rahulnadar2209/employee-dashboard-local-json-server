import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule,HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, EmployeeDashboardComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ApiService]
})
export class AppModule { }
