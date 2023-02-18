import { Injectable } from '@angular/core';
import {AngularFireAuth}from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private Fireauth:AngularFireAuth,private router  : Router) {  }

  login(email :string , password : string){
    this.Fireauth.signInWithEmailAndPassword(email,password).then(()=>{
      localStorage.setItem('token','true');
      this.router.navigate(['dashboard'])

    },err => {
      alert(err.message)
      this.router.navigate(['/login'])
    })
  }
  register(email:string,password:string){
    this.Fireauth.createUserWithEmailAndPassword(email,password).then(()=>{
      alert("Registerd Succesfully")
      this.router.navigate(['/login'])
    },err=>{
      alert(err.message);
      this.router.navigate(['/register'])
    })
    
  }
  logout(){
    this.Fireauth.signOut().then(()=>{
      localStorage.removeItem('token')
      this.router.navigate(['/login'])
    },err=>{
      alert(err.message)
      
    })
  }

}
