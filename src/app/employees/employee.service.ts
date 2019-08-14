import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';




@Injectable()
export class EmployeeService {
  private listEmployees: Employee[] = [
    {
      id: 1,
      name: 'Dhami Dai',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'dddai@gmail.com',
      dateOfBirth: new Date('10/25/1994'),
      department: '1',
      isActive: true,
      photoPath: 'assets/images/dhami_dai.png'

    },
    {
      id: 2,
      name: 'Digbijaya Ji',
      gender: 'Male',
      contactPreference: 'Phone',
      phoneNumber: 1234567890,
      dateOfBirth: new Date('10/25/1997'),
      department: '2',
      isActive: true,
      photoPath: 'assets/images/digbijaya_ji.png'
    },
    {
      id: 3,
      name: 'Shrawan Ji',
      gender: 'Male',
      contactPreference: 'Phone',
      phoneNumber: 1234567890,
      dateOfBirth: new Date('10/20/1997'),
      department: '3',
      isActive: true,
      photoPath: 'assets/images/shrawan_ji.png'
    }
  ];

  getEmployees(): Observable<Employee[]> {
    return of(this.listEmployees);
  }

  getEmployee(id: number): Employee {
    return this.listEmployees.find(e => e.id === id);
  }

  save(employee: Employee) {
    if (employee.id === null) {
      const maxid = this.listEmployees.reduce(function (e1, e2) {
        return (e1.id > e2.id) ? e1 : e2;
      }).id;
      employee.id = maxid + 1;
      this.listEmployees.push(employee);
    } else {
      const foundIndex = this.listEmployees.findIndex(e => e.id === employee.id);
      this.listEmployees[foundIndex] = employee;
    }
  }

  deleteEmployee(id: number) {
   const i = this.listEmployees.findIndex(e => e.id === id);
   if(i !== -1) {
     this.listEmployees.splice(i, 1);
   }
  }
}
