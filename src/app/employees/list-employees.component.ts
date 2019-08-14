import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
employees: Employee[];
searchTerm: string;
//dataFromChild: Employee;
// emplyeeToDisplay: Employee;
// private arrayIndex = 1;

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
   this.employeeService.getEmployees().subscribe(empList => this.employees = empList);
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

  // handleNotify(eventData: Employee) {
  //   this.dataFromChild = eventData;
  // }

  onClick(employeeId: number) {
    this.router.navigate(['/employees', employeeId]);
  }

}
