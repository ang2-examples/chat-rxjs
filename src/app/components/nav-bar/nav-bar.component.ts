import { Component, OnInit } from '@angular/core';
import {MessagesService} from '../../services/messages.service';
import {ThreadsService} from '../../services/threads.service';
import {Thread} from '../../models/thread.model';
import {Message} from '../../models/message.model';
import * as _ from 'underscore';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  logoSrc: string;
  unreadMessagesCount: number;

  constructor(private messagesService: MessagesService,
              private threadsService: ThreadsService) {
    this.logoSrc = require('../../images/logos/ng-book-2-minibook.png');
  }

  ngOnInit() {
    this.messagesService.messages
      .combineLatest(
        this.threadsService.currentThread,
        (messages: Message[], currentThread: Thread) => [currentThread, messages] )

      .subscribe(([currentThread, messages]: [Thread, Message[]]) => {
        this.unreadMessagesCount =
          _.reduce(
            messages,
            (sum: number, m: Message) => {
              const messageIsInCurrentThread: boolean = m.thread &&
                currentThread &&
                (currentThread.id === m.thread.id);
              if (m && !m.isRead && !messageIsInCurrentThread) {
                sum = sum + 1;
              }
              return sum;
            },
            0);
      });
  }

}
