import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHomepageComponent } from './admin-homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from '../app-routing.module';

describe('AdminHomepageComponent', () => {
  let component: AdminHomepageComponent;
  let fixture: ComponentFixture<AdminHomepageComponent>;

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
      declarations: [AdminHomepageComponent]
    });

    fixture = TestBed.createComponent(AdminHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Admin home component', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Admin-Home'`, () => {
    const fixture = TestBed.createComponent(AdminHomepageComponent);

    expect(component.title).toEqual('Admin-Home');
  });


  it('Testing Resolve bug Form  valid ', () => {
    const fixture = TestBed.createComponent(AdminHomepageComponent);
    const Resolvebug = fixture.componentInstance;

    Resolvebug.myform.controls?.['bugId'].setValue(3);
    Resolvebug.myform.controls?.['bugName'].setValue("system error");
    Resolvebug.myform.controls?.['userName'].setValue("aravind");
    Resolvebug.myform.controls?.['description'].setValue("error is occured in system");
    Resolvebug.myform.controls?.['status'].setValue("close");
    Resolvebug.myform.controls?.['solution'].setValue("give valid decription");


    expect(Resolvebug.myform.valid).toBeTruthy();
  });

  it('Testing Resolve bug Form   invalid id ', () => {
    const fixture = TestBed.createComponent(AdminHomepageComponent);
    const Resolvebug = fixture.componentInstance;

    Resolvebug.myform.controls?.['bugId'].setValue("");
    Resolvebug.myform.controls?.['bugName'].setValue("system error");
    Resolvebug.myform.controls?.['userName'].setValue("aravind");
    Resolvebug.myform.controls?.['description'].setValue("error is occured in system");
    Resolvebug.myform.controls?.['status'].setValue("close");
    Resolvebug.myform.controls?.['solution'].setValue("give valid decription");
    expect(Resolvebug.myform.valid).toBeFalsy();

  });

  it('Testing Resolve bug Form   invalid user name ', () => {
    const fixture = TestBed.createComponent(AdminHomepageComponent);
    const Resolvebug = fixture.componentInstance;

    Resolvebug.myform.controls?.['bugId'].setValue(3);
    Resolvebug.myform.controls?.['bugName'].setValue("system error");
    Resolvebug.myform.controls?.['userName'].setValue("");
    Resolvebug.myform.controls?.['description'].setValue("error is occured in system");
    Resolvebug.myform.controls?.['status'].setValue("close");
    Resolvebug.myform.controls?.['solution'].setValue("give valid decription");
    expect(Resolvebug.myform.valid).toBeFalsy();

  });

  it('Testing Resolve bug Form   invalid data ', () => {
    const fixture = TestBed.createComponent(AdminHomepageComponent);
    const Resolvebug = fixture.componentInstance;

    Resolvebug.myform.controls?.['bugId'].setValue("");
    Resolvebug.myform.controls?.['bugName'].setValue("");
    Resolvebug.myform.controls?.['userName'].setValue("");
    Resolvebug.myform.controls?.['description'].setValue("");
    Resolvebug.myform.controls?.['status'].setValue("");
    Resolvebug.myform.controls?.['solution'].setValue("");
    expect(Resolvebug.myform.valid).toBeFalsy();

  });


  it('Testing Resolve bug  Form initial values', () => {
    const fixture = TestBed.createComponent(AdminHomepageComponent);
    const app = fixture.componentInstance;
    const adminFormGroup = app.myform;
    const adminFormValues = {
      bugId: '',
      bugName: '',
      userName: '',
      description: '',
      status: '',
      solution: '',

    }
    expect(adminFormGroup.value).toEqual(adminFormValues);
  });

});
