import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployeeComponent } from './create-employee.component';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule, BsDatepickerDirective } from 'ngx-bootstrap/datepicker/public_api';
import { BrowserModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeService } from './employee.service';
import { AppRoutingModule } from '../app-routing.module';
import { DebugElement } from '@angular/core';

fdescribe('CreateEmployeeComponent', () => {
  let component: CreateEmployeeComponent;
  let fixture: ComponentFixture<CreateEmployeeComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEmployeeComponent ],
      imports: [
        FormsModule,
        AppRoutingModule,
        BsDatepickerModule.forRoot()
      ],
      providers: [
        EmployeeService
      ]
    })
    .compileComponents().then(() => {

    fixture = TestBed.createComponent(CreateEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('form'));
    el = de.nativeElement;

  });
  }));

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should should call the saveEmployee method', async(() => {
    fixture.detectChanges();
    spyOn(component, 'saveEmployee');
    console.log(fixture);
    el = fixture.debugElement.query(By.css('button').nativeElement);
    el.click();

    expect(component.saveEmployee).toHaveBeenCalledTimes(1);

  })

});
