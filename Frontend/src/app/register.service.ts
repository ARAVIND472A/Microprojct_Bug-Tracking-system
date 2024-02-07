import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './model/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private url:string="http://localhost:3456"

  constructor(private http:HttpClient) { }

  insert(user:User)
  {
    this.http.post(this.url+"/Register",user).subscribe();
    return "Registered Successfully";

  }

  verfiyCredential(user:any)
  {
   return this.http.post(this.url+"/login",user);
    

  }
  
}
