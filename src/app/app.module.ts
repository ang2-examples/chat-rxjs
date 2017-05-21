import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {UserService} from './services/user.service';
import {MessagesService} from './services/messages.service';
import {ThreadsService} from './services/threads.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    UserService,
    MessagesService,
    ThreadsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
