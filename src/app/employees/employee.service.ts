import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable()
export class EmployeeService {
  private listEmployees: Employee[] = [
    {
      id: 1,
      name: 'Dhami Dai',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'dddai@gmail.com',
      dateOfBirth: new Date ('10/25/1994'),
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
      dateOfBirth: new Date ('10/25/1997'),
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
      dateOfBirth: new Date ('10/20/1997'),
      department: '3',
      isActive: true,
      photoPath: 'assets/images/shrawan_ji.png'
    }
  ];

  getEmployees(): Employee[] {
    return this.listEmployees;
  }

  save(employee: Employee) {
    this.listEmployees.push(employee);
  }
}
