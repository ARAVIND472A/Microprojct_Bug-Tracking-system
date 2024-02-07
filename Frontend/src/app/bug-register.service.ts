import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bug } from './model/Bug';

@Injectable({
  providedIn: 'root'
})
export class BugRegisterService {

  private url:string="http://localhost:3456"

  constructor(private http:HttpClient) { }


  registerBug(bug:Bug)
  {
    this.http.post(this.url+"/registerbug",bug).subscribe();
    return "Bug Registered";

  }

  updateDetail(bug:any)
  {
    this.http.put(this.url+"/PerformUpdate",bug).subscribe();
    return "Bug resolved";

  }


  getAlldetails()
  {
    return this.http.get<Bug[]>(this.url+"/ViewAll");
  }

  getDetails(bug:Bug){
    return this.http.get<Bug[]>(this.url+"/View/"+bug.userName);
  }


}
