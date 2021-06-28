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
  employeedata!: any;
  employeemodelObj: EmployeeModel = new EmployeeModel();
  showadd!:boolean;
  showupdate!:boolean;

  constructor(private formbuilder: FormBuilder, private api: ApiService) {}

  ngOnInit() {
    this.formvalue = this.formbuilder.group({
      firstname: [''],
      lastname: [''],
      email: [''],
      phoneno: [''],
      salary: ['']
    });
    this.getemployeedata();
  }
  clickAddEmployee(){
    this.formvalue.reset();
    this.showadd=true;
    this.showupdate=false;
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
        let close = document.getElementById('cancel');
        close.click();
        this.getemployeedata();
      },
      err => {
        alert('something went wrong!');
      }
    );
  }

  getemployeedata() {
    this.api.getemployee().subscribe(res => {
      this.employeedata = res;
    });
  }

  deleteemployee(emp: any) {
    this.api.deleteemployee(emp.id).subscribe(res => {
      alert('Employee Deleted successfully!!');
      this.getemployeedata();
    });
  }

  onEdit(emp: any) {
    this.showadd=false;
    this.showupdate=true;
    this.employeemodelObj.id = emp.id;
    this.formvalue.controls['firstname'].setValue(emp.firstname);
    this.formvalue.controls['lastname'].setValue(emp.lastname);
    this.formvalue.controls['email'].setValue(emp.email);
    this.formvalue.controls['phoneno'].setValue(emp.mobile);
    this.formvalue.controls['salary'].setValue(emp.salary);
  }

  updateemployeedetails() {
    this.employeemodelObj.firstname = this.formvalue.value.firstname;
    this.employeemodelObj.lastname = this.formvalue.value.lastname;
    this.employeemodelObj.email = this.formvalue.value.email;
    this.employeemodelObj.mobile = this.formvalue.value.phoneno;
    this.employeemodelObj.salary = this.formvalue.value.salary;

    this.api
      .updateemployee(this.employeemodelObj, this.employeemodelObj.id)
      .subscribe(res => {
        alert('updated successfully');
        this.formvalue.reset();
        let close = document.getElementById('cancel');
        close.click();
        this.getemployeedata();
      });
  }
}
