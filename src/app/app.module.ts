import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule , AngularFireDatabase} from '@angular/fire/database';
import { environment } from './../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PostsComponent,
    UsersComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
