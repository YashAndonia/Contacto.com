import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng6';
  items: Observable<any[]>;
  constructor ( db: AngularFireDatabase) {
  	this.items = db.list('/Messages').valueChanges();
  }
}
