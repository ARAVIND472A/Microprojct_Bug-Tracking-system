import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { MatCardModule } from '@angular/material/card';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatToolbarModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterTestingModule,
        BrowserModule,
        AppRoutingModule,
        MatCardModule,

        ReactiveFormsModule,],
      declarations: [RegisterComponent]
    });
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Register component', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Register-component'`, () => {
    const fixture = TestBed.createComponent(RegisterComponent);

    expect(component.title).toEqual('Register-Component');
  });

  it('Register Form GUI "Input" count', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    fixture.detectChanges();
    const formElement = fixture.debugElement.nativeElement.querySelector("#myform");
    const inputElements = formElement.querySelectorAll("input");
    expect(inputElements.length).toEqual(3);
  });

  it('Testing register Form valid', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const Register = fixture.componentInstance;
    Register.myform.controls?.['userName'].setValue("gowtham");
    Register.myform.controls?.['password'].setValue("password");

    expect(Register.myform.valid).toBeTruthy();
  });

  it('Testing Register Form  invalid name and password ', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const Register = fixture.componentInstance;
    Register.myform.controls?.['userName'].setValue("");
    Register.myform.controls?.['password'].setValue("");

    expect(Register.myform.valid).toBeFalsy();
  });

  it('Testing Register Form invalid name  valid password', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const Register = fixture.componentInstance;
    Register.myform.controls?.['userName'].setValue("");
    Register.myform.controls?.['password'].setValue("54784");

    expect(Register.myform.valid).toBeFalsy();
  });

  it('Testing Register Form  valid name invalid password ', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const Register = fixture.componentInstance;
    Register.myform.controls?.['userName'].setValue("gowtham");
    Register.myform.controls?.['password'].setValue("*.djhds");

    expect(Register.myform.valid).toBeFalsy();
  });


  it('Testing Form initial values', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const app = fixture.componentInstance;
    const registerFormGroup = app.myform;
    const registerFormValues = {
     userName: '',
      password: '',
    }
    expect(registerFormGroup.value).toEqual( registerFormValues);
  });









});
