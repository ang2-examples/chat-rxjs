import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {UserService} from './services/user.service';
import {MessagesService} from './services/messages.service';
import {ThreadsService} from './services/threads.service';
import { ChatThreadsComponent } from './components/chat-threads/chat-threads.component';
import { ChatThreadComponent } from './components/chat-thread/chat-thread.component';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';
import { ChatMessageComponent } from './components/chat-message/chat-message.component';
import { FromNowPipe } from './pipes/from-now.pipe';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatThreadsComponent,
    ChatThreadComponent,
    ChatWindowComponent,
    ChatMessageComponent,
    FromNowPipe,
    NavBarComponent
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
