import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import { EmployeeModel } from './employee-model';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {
  formvalue!: FormGroup;
  employeemodelObj: EmployeeModel = new EmployeeModel();

  constructor(private formbuilder: FormBuilder, private api: ApiService) {}

  ngOnInit() {
    this.formvalue = this.formbuilder.group({
      firstname: [''],
      lastname: [''],
      email: [''],
      phoneno: [''],
      salary: ['']
    });
  }
  postemployeedetails() {
    this.employeemodelObj.firstname = this.formvalue.value.firstname;
    this.employeemodelObj.lastname = this.formvalue.value.lastname;
    this.employeemodelObj.email = this.formvalue.value.email;
    this.employeemodelObj.mobile = this.formvalue.value.phoneno;
    this.employeemodelObj.salary = this.formvalue.value.salary;

    this.api.postemployee(this.employeemodelObj).subscribe(
      res => {
        console.log(res);
        alert('Employee added successfully!!');
        this.formvalue.reset();
      },
      err => {
        alert('something went wrong!');
      }
    );
  }
}
