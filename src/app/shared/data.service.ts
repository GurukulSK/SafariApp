import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Safari } from '../model/safari';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs:AngularFirestore) { }

  addsafari(safari : Safari){
    safari.id = this.afs.createId()
    return this.afs.collection("/mycol").add(safari)
  }
  getAllsafari(){
    return this.afs.collection("/mycol").snapshotChanges();
  }
}
