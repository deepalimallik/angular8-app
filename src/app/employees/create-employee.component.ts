import { Component, OnInit, ViewChild } from '@angular/core';
import { Department } from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from './employee.service';
import { Employee } from '../models/employee.model';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  //gender = male;
  //isActive = true;
  //department = '1';

  @ViewChild('employeeForm', {static: false}) public createEmployeeForm: NgForm;
  previewPhoto: boolean;
  panelTitle: string;
  dateOfBirth: Date = new Date(2019, 0, 30);
  datePickerConfig: Partial<BsDatepickerConfig>;
  employee: Employee;

  departments: Department[] = [
    { id: 1, name: 'IT'},
    { id: 2, name: 'Development'},
    { id: 3, name: 'HR'},
    { id: 4, name: 'QA'}
  ];
  constructor(private employeeService: EmployeeService,
    private router: Router, private route: ActivatedRoute) {
    this.datePickerConfig = Object.assign({},
       { containerClass: 'theme-dark-blue',
       showWeekNumbers: true,
       minDate: new Date(2019, 0, 1),
       maxDate: new Date(2019, 11, 31),
       dateInputFormat: 'DD/MM/YYYY'
      });
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }

  ngOnInit() {
    this.route.paramMap.subscribe(parameterMap => {
     const id = +parameterMap.get('id');
     this.getEmployee(id);
    });
  }

  getEmployee(id: number) {
    if (id === 0) {
      this.employee = {
        id: null,
        name: null,
        gender: null,
        contactPreference: null,
        email: '',
        dateOfBirth: null,
        department: 'select',
        isActive: null,
        photoPath: null
    };
    this.panelTitle = 'Create Employee';
    } else {
      this.panelTitle = 'Edit Employee';
      this.employee = Object.assign({}, this.employeeService.getEmployee(id));
    }
  }

  saveEmployee(): void {
    console.log(this.employee);
   const newEmployee: Employee = Object.assign({}, this.employee);
    this.employeeService.save(newEmployee);
    this.createEmployeeForm.reset();
    this.router.navigate(['list']);
  }


}
