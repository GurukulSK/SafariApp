import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  login = false
  ngOnInit(): void {
    if(localStorage.getItem('token'))
    {
      this.login = true
    }
  }
  logout(){
    localStorage.clear()
    this.login=false
    console.log(this.login);
  }
  
}
