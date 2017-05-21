import {ChangeDetectionStrategy, Component, ElementRef, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Thread} from '../../models/thread.model';
import {Message} from '../../models/message.model';
import {User} from '../../models/user.model';
import {MessagesService} from '../../services/messages.service';
import {ThreadsService} from '../../services/threads.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatWindowComponent implements OnInit {

  messages: Observable<any>;
  currentThread: Thread;
  draftMessage: Message;
  currentUser: User;

  constructor(private messagesService: MessagesService,
              private threadsService: ThreadsService,
              private userService: UserService,
              private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.messages = this.threadsService.currentThreadMessages;

    this.draftMessage = new Message();

    this.threadsService.currentThread.subscribe(
      (thread: Thread) => {
        this.currentThread = thread;
      });

    this.userService.currentUser
      .subscribe(
        (user: User) => {
          this.currentUser = user;
        });

    this.messages
      .subscribe(
        (messages: Array<Message>) => {
          setTimeout(() => {
            this.scrollToBottom();
          });
        });
  }

  onEnter(event: any): void {
    this.sendMessage();
    event.preventDefault();
  }

  sendMessage(): void {
    const message: Message = this.draftMessage;
    message.author = this.currentUser;
    message.thread = this.currentThread;
    message.isRead = true;
    this.messagesService.addMessage(message);
    this.draftMessage = new Message();
  }

  scrollToBottom(): void {
    const scrollPane: any = this.elementRef.nativeElement.querySelector('.msg-container-base');
    scrollPane.scrollTop = scrollPane.scrollHeight;
  }
}
