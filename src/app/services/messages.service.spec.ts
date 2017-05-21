import { TestBed, inject } from '@angular/core/testing';
import { MessagesService } from './messages.service';
import {User} from '../models/user.model';
import {Thread} from '../models/thread.model';
import {Message} from '../models/message.model';

describe('MessagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessagesService]
    });
  });

  it('should ...', inject([MessagesService], (service: MessagesService) => {
    expect(service).toBeTruthy();
  }));

  it('should test', inject([MessagesService], (messagesService: MessagesService) => {

    const user: User = new User('Nate', '');
    const thread: Thread = new Thread('t1', 'Nate', '');
    const m1: Message = new Message({
      author: user,
      text: 'Hi!',
      thread: thread
    });

    const m2: Message = new Message({
      author: user,
      text: 'Bye!',
      thread: thread
    });

    // const messagesService: MessagesService = new MessagesService();

    // listen to each message indivdually as it comes in
    messagesService.newMessages
      .subscribe( (message: Message) => {
        console.log('=> newMessages: ' + message.text);
      });

    // listen to the stream of most current messages
    messagesService.messages
      .subscribe( (messages: Message[]) => {
        console.log('=> messages: ' + messages.length);
      });

    messagesService.addMessage(m1);
    messagesService.addMessage(m2);

    // => messages: 1
    // => newMessages: Hi!
    // => messages: 2
    // => newMessages: Bye!
  }));
});
