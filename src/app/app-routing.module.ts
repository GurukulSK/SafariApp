import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddsafariComponent } from './components/addsafari/addsafari.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path:"",redirectTo:'dashboard',pathMatch:'full'},
  {path:"login",component:LoginComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:'register',component:RegisterComponent},
  {path:'addbook',component:AddsafariComponent},
  {path:'booklist',component:BookListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
