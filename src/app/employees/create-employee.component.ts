import { Component, OnInit } from '@angular/core';
import { Department } from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Router } from '@angular/router';
import { EmployeeService } from './employee.service';
import { Employee } from '../models/employee.model';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  //gender = male;
//isActive = true;
//department = '1';

employee: Employee = {
    id: 4,
    name: '',
    gender: '',
    contactPreference: '',
    email: '',
    dateOfBirth: new Date (),
    department: '',
    isActive: false,
    photoPath: ''
};
previewPhoto: boolean;
dateOfBirth: Date = new Date(2019, 0, 30);
datePickerConfig: Partial<BsDatepickerConfig>;
departments: Department[] = [
  { id: 1, name: 'IT'},
  { id: 2, name: 'Development'},
  { id: 3, name: 'HR'},
  { id: 4, name: 'QA'}
];
  constructor(private employeeService: EmployeeService, private router: Router) {
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
  }

  saveEmployee(): void {
    console.log(this.employee);
    this.employeeService.save(this.employee);
    this.router.navigate(['list']);
  }
}
