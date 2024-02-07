import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserHomepageComponent } from './user-homepage/user-homepage.component';
import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path :'Register',component:RegisterComponent},
  {path :'Login',component:LoginComponent},
  {path:'UserHome',component:UserHomepageComponent},
  {path:'AdminHome',component:AdminHomepageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
