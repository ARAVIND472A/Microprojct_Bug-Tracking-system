import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from '../app-routing.module';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

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
      declarations: [LoginComponent]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Login component', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Login-component'`, () => {
    const fixture = TestBed.createComponent(LoginComponent);

    expect(component.title).toEqual('Login-component');
  });

  it('Login Form GUI "Input" count', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const formElement = fixture.debugElement.nativeElement.querySelector("#myform");
    const inputElements = formElement.querySelectorAll("input");
    expect(inputElements.length).toEqual(3);
  });

  it('Testing LogIn Form valid', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const Login = fixture.componentInstance;
    Login.myform.controls?.['userName'].setValue("siva");
    Login.myform.controls?.['password'].setValue("siva@1234");
    expect(Login.myform.valid).toBeTruthy();
  });

  it('Testing LogIn Form Invalid', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const Login = fixture.componentInstance;
    Login.myform.controls?.['userName'].setValue("");
    Login.myform.controls?.['password'].setValue("");
    expect(Login.myform.valid).toBeFalse();
  });

  it('Testing LogIn Form Invalid name valid password', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const Login = fixture.componentInstance;
    Login.myform.controls?.['userName'].setValue("");
    Login.myform.controls?.['password'].setValue("74847g");
    expect(Login.myform.valid).toBeFalse();
  });

  it('Testing LogIn Form valid name invalid password', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const Login = fixture.componentInstance;
    Login.myform.controls?.['userName'].setValue("valan");
    Login.myform.controls?.['password'].setValue("*.djhdg");
    expect(Login.myform.valid).toBeFalse();
  });

  it('Testing Login Form initial values', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance;
    const LoginFormGroup = app.myform;
    const loginFormValues = {
     userName: '',
      password: '',
    }
    expect(LoginFormGroup.value).toEqual( loginFormValues);
  });

});
