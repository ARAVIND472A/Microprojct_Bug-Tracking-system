import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { User } from '../model/User';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user:User;
  myform:FormGroup;
  result:string=" ";
  
  constructor(private service:RegisterService,private _router: Router) {

    
    this.myform = new FormGroup(
      {
        userName: new FormControl('', [Validators.required, Validators.pattern('[a-z A-Z]+')]),
        password:new FormControl('',[Validators.required,Validators.pattern('[A-Z a-z0-9.@_]+')]),
        

      }
    );
  
     this.user=new User();

  }

  insert (data:any){
   this.user.userName=data.userName;
   this.user.password=data.password;
   this.result=this.service.insert(this.user);

  }

  goLogIn(){
    this._router.navigate(['/Login']);
  }
 

}
