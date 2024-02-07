import { Component } from '@angular/core';
import { User } from '../model/User';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user:User;
  myform:FormGroup;
  result:string=" ";

  constructor(private service:RegisterService,private router:Router) {

    
    this.myform = new FormGroup(
      {
        userName: new FormControl('', [Validators.required, Validators.pattern('[a-z A-Z]+')]),
        password:new FormControl('',[Validators.required,Validators.pattern('[A-Z a-z0-9.@_]+')]),
        

      }
    );
  
     this.user=new User();

  }

  


   login (data:any){
    this.user.userName=data.userName;
    this.user.password=data.password;
 
 
   this.service.verfiyCredential(this.user).subscribe(
     (resultdata:any)=> {
       console.log(resultdata)
 
 
       if(resultdata.message=="Admin Success"){
          this.router.navigate(['/AdminHome']);
       } else if(resultdata.message=="User Success"){
         this.router.navigate(['/UserHome']);
       }
       else{
         alert("Invalid User");
       }
     }
    );
   }

   goLogIn(){
    this.router.navigate(['/Register']);
  }
  
 

}
