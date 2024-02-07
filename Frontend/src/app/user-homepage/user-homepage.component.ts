import { Component } from '@angular/core';
import { Bug } from '../model/Bug';
import { BugRegisterService } from '../bug-register.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-user-homepage',
  templateUrl: './user-homepage.component.html',
  styleUrls: ['./user-homepage.component.css']
})
export class UserHomepageComponent {

  bug:Bug;
  myform:FormGroup;
  result:string=" ";
  myform1:FormGroup;
  bugList:Bug[]=[];
  flag:boolean;
  flag1:boolean;
  

  constructor(private service:BugRegisterService) {

    
    this.myform = new FormGroup(
      {
        bugName: new FormControl('', [Validators.required, Validators.pattern('[a-z A-z]+')]),
        userName: new FormControl('', [Validators.required, Validators.pattern('[a-z A-Z]+')]),
        description:new FormControl('',[Validators.required,Validators.pattern('[A-Z a-z]+')]),
        

      }
    );

    this.myform1= new FormGroup(
      {
        
        userName: new FormControl('', [Validators.required, Validators.pattern('[a-z A-Z]+')]),
       
        

      }
    );
  
     this.bug=new Bug();
     this.flag=true;
     this.flag1=false;
   

  }

  insert (data:any){
    this.bug.bugName=data.bugName;
    this.bug.description=data.description;
    this.bug.userName=data.userName;
    this.result=this.service.registerBug(this.bug);
 
   }

   checkStatus(data:any){
    this.bug.userName=data.userName;
    this.service.getDetails(this.bug).subscribe(bugs => this.bugList = bugs);
   }
   changeRegisterBug()
   {
    if(this.flag1==true)
    {
      this.flag1=!this.flag1;
    }
    
    this.flag=! this.flag;
    
   }
   changeCheckStatus()
   {
    if(this.flag==true)
    {
      this.flag=!this.flag;
    }

    this.flag1=! this.flag1;
   
   }



}
