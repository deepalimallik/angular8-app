import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
employees: Employee[];
dataFromChild: Employee;
// emplyeeToDisplay: Employee;
// private arrayIndex = 1;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
   this.employees = this.employeeService.getEmployees();
  // this.emplyeeToDisplay = this.employees[0];
  }

  // nextEmployee(): void {
  //   if (this.arrayIndex <= 2) {
  //     this.emplyeeToDisplay = this.employees[this.arrayIndex];
  //     this.arrayIndex++;
  //   } else {
  //     this.emplyeeToDisplay = this.employees[0];
  //     this.arrayIndex = 1;
  //   }
  // }

  handleNotify(eventData: Employee) {
    this.dataFromChild = eventData;
  }

}
