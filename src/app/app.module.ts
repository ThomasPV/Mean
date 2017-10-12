import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { todoService } from '../services/todo.service';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpModule, AngularFireModule.initializeApp(environment.firebase, 'mean-dev'), AngularFireDatabaseModule, AngularFireAuthModule
  ],
  providers: [todoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
