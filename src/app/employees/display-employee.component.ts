import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Employee } from '../models/employee.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './employee.service';


@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit { //, OnChanges
  @Input() employee: Employee;
  @Output() notify: EventEmitter<Employee> = new EventEmitter<Employee>();
  private selectedEmployeeId: number;

  constructor(private route: ActivatedRoute, private router: Router, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.selectedEmployeeId = +this.route.snapshot.paramMap.get('id');
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   const previousEmployee = <Employee>changes.employee.previousValue;
  //   const currentEmployee = <Employee>changes.employee.currentValue;

  //   console.log('Previous: ' + (previousEmployee ? previousEmployee.name : 'NULL'));
  //   console.log('Current: ' + currentEmployee.name);

  // }

  // handleClick() {
  //   this.notify.emit(this.employee);
  // }

  viewEmployee() {
    this.router.navigate(['/employees', this.employee.id]);
  }

  editEmployee() {
    this.router.navigate(['/edit', this.employee.id]);
  }

  deleteEmployee() {
    this.employeeService.deleteEmployee(this.employee.id);
  }

}
