import { Component, OnInit } from '@angular/core';
import { Safari } from 'src/app/model/safari';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-addsafari',
  templateUrl: './addsafari.component.html',
  styleUrls: ['./addsafari.component.scss']
})
export class AddsafariComponent implements OnInit {

  constructor(private data: DataService) { }

  safari :Safari = {
    // img_url : "",
    url : "",
    title : "",
    id : ""
  }
  ngOnInit(): void {
  }
  add(){
    if(this.safari.title == "" || this.safari.url == ""){
      alert("Please Fill All inputs");
      return;
    }
    this.data.addsafari(this.safari).finally(()=>{
      alert("Safari added")
    }).then(()=>{
      // this.safari.img_url = ""
      this.safari.title = ""
      this.safari.url = ""
    })
  }
}