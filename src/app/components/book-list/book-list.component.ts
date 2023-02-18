import { Component, OnInit } from '@angular/core';
import { Safari } from 'src/app/model/safari';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  safari : Safari[] = []

  constructor(private data : DataService) { }

  ngOnInit(): void {
    this.getAllsafaris()
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
