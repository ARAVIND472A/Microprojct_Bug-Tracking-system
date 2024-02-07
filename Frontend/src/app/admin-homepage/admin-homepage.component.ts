import { Component } from '@angular/core';
import { Bug } from '../model/Bug';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { BugRegisterService } from '../bug-register.service';

@Component({
  selector: 'app-admin-homepage',
  templateUrl: './admin-homepage.component.html',
  styleUrls: ['./admin-homepage.component.css']
})
export class AdminHomepageComponent {
  myform:FormGroup;
  bug: Bug;
  bugList: Bug[] = [];
  result:string="";
  
  flag:boolean;
  flag1:boolean;

  constructor(private service: BugRegisterService) {


    this.myform = new FormGroup(
      {
        bugId: new FormControl('', [Validators.required]),
        bugName: new FormControl('', [Validators.required, Validators.pattern('[a-z A-z]+')]),
        userName:new FormControl('',[Validators.required,Validators.pattern('[A-Z a-z]+')]),
        description:new FormControl('',[Validators.required,Validators.pattern('[A-Z a-z]+')]),
        status:new FormControl('',[Validators.required,Validators.pattern('[A-Z a-z]+')]),
        solution:new FormControl('',[Validators.required,Validators.pattern('[A-Z a-z]+')]),
        
        
        

      }
    );
    this.flag=true;
    this.flag1=false;
    this.bug=new Bug();
    this.getAll();

    
  }

  
  update(data: any) {
    this.bug.bugId=data.bugId;
    this.bug.bugName= data.bugName;
    this.bug.userName=data.userName;
    this.bug.description = data.description;
    this.bug.status = data.status;
    this.bug.solution = data.solution;
   

    this.result = this.service.updateDetail(this.bug);
    
  }


  getAll() {
    this.service.getAlldetails().subscribe(bugs => this.bugList = bugs)
  }
 
  openBug(){
    
    if(this.flag1==true)
    {
      this.flag1=!this.flag1;
    }
    this.flag=! this.flag;
  }

  viewBug(){
    if(this.flag==true)
    {
      this.flag=!this.flag;
    }
    this.flag1=! this.flag1;
  }


 

}
