import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import {AngularFirestore} from '@angular/fire/compat/firestore'
import { Safari } from 'src/app/model/safari';
import { DataService } from 'src/app/shared/data.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  safari : Safari[] = []
  id  = ""
  title = ""
  url = ""
  login  = false;
  img_url = ""
  constructor(private auth:AuthService,private afs:AngularFirestore,private data:DataService) { 
    // this.afs.collection('/mycol').add({hello:"Hello"})
    
  }
  
  ngOnInit(): void {
    this.getAllsafaris()
    if(localStorage.getItem('token'))
    {
      this.login = true
    }

  }
  register(){
    this.auth.logout()
  }
  logout(){
    localStorage.clear()
  }
  getAllsafaris(){
    this.data.getAllsafari().subscribe(res=>{
      this.safari = res.map((e :any) =>{
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        // console.log(data);
        return data;
      })
      console.log(this.safari);
    })
  }


}
