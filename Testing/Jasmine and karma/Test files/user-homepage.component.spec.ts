import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHomepageComponent } from './user-homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from '../app-routing.module';

describe('UserHomepageComponent', () => {
  let component: UserHomepageComponent;
  let fixture: ComponentFixture<UserHomepageComponent>;

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
      declarations: [UserHomepageComponent]
    });
    fixture = TestBed.createComponent(UserHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create user-home component', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'user home-component'`, () => {
    const fixture = TestBed.createComponent(UserHomepageComponent);

    expect(component.title).toEqual('user-home');
  });

  it('RegisterBug bug Form GUI "Input" count', () => {
    const fixture = TestBed.createComponent(UserHomepageComponent);
    fixture.detectChanges();
    const formElement = fixture.debugElement.nativeElement.querySelector("#myform");
    const inputElements = formElement.querySelectorAll("input");
    expect(inputElements.length).toEqual(4);
  });

  it('RegisterBug bug Form GUI "Button" count', () => {
    const fixture = TestBed.createComponent(UserHomepageComponent);
    fixture.detectChanges();
    const formElement = fixture.debugElement.nativeElement.querySelector("#myForm");
    const inputElements = formElement.querySelectorAll("button");
    expect(inputElements.length).toEqual(2);
  });

  it('Testing registerBug Form valid', () => {
    const fixture = TestBed.createComponent(UserHomepageComponent);
    const registerBug = fixture.componentInstance;
    registerBug.myform.controls?.['bugName'].setValue("mobile bug");
    registerBug.myform.controls?.['userName'].setValue("aravind");
    registerBug.myform.controls?.['description'].setValue("while using camera");

    expect(registerBug.myform.valid).toBeTruthy();
  });

  it('Testing registerBug Form Invalid bug name', () => {
    const fixture = TestBed.createComponent(UserHomepageComponent);
    const registerBug = fixture.componentInstance;
    registerBug.myform.controls?.['bugName'].setValue("");
    registerBug.myform.controls?.['userName'].setValue("aravind");
    registerBug.myform.controls?.['description'].setValue("while using camera");

    expect(registerBug.myform.valid).toBeFalsy();
  });

  it('Testing registerBug Form Invalid userName', () => {
    const fixture = TestBed.createComponent(UserHomepageComponent);
    const registerBug = fixture.componentInstance;
    registerBug.myform.controls?.['bugName'].setValue("mobile error");
    registerBug.myform.controls?.['userName'].setValue("");
    registerBug.myform.controls?.['description'].setValue("while using camera");

    expect(registerBug.myform.valid).toBeFalsy();
  });

  it('Testing registerBug Form Invalid description', () => {
    const fixture = TestBed.createComponent(UserHomepageComponent);
    const registerBug = fixture.componentInstance;
    registerBug.myform.controls?.['bugName'].setValue("mobile error");
    registerBug.myform.controls?.['userName'].setValue("aravind");
    registerBug.myform.controls?.['description'].setValue("");

    expect(registerBug.myform.valid).toBeFalsy();
  });


  it('Testing registerBug Form Invalid data', () => {
    const fixture = TestBed.createComponent(UserHomepageComponent);
    const registerBug = fixture.componentInstance;
    registerBug.myform.controls?.['bugName'].setValue("");
    registerBug.myform.controls?.['userName'].setValue("");
    registerBug.myform.controls?.['description'].setValue("");

    expect(registerBug.myform.valid).toBeFalsy();
  });

 







});
