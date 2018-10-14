import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  public counter = 4;	
  items: Observable<any[]>;	
  msg : AngularFireList<Messages[]>;
  constructor(db: AngularFireDatabase) { 
  	this.items = db.list('/Messages').valueChanges();
  	this.msg = db.list('/Messages');
  }
public addMessage(mesg: string): void{
	this.counter ++ ;
    this.msg.push({ post:mesg });
}
  ngOnInit() {
  }

}
