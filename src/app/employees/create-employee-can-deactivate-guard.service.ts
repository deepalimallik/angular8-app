import { CanDeactivate } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee.component';
import { Injectable } from '@angular/core';


@Injectable()
export class CreateEmpolyeeCanDeactivaetGuardService implements CanDeactivate<CreateEmployeeComponent> {
    canDeactivate(component: CreateEmployeeComponent):  boolean {
        if(component.createEmployeeForm.dirty) {
            return confirm('Are yor sure you want to discard your changes?');
        }
        return true;
    }

}