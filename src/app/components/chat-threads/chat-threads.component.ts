import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ThreadsService} from '../../services/threads.service';

@Component({
  selector: 'app-chat-threads',
  templateUrl: './chat-threads.component.html',
  styleUrls: ['./chat-threads.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatThreadsComponent implements OnInit {

  threads: Observable<any>;

  constructor(private threadsService: ThreadsService) {
    this.threads = threadsService.orderedThreads;
  }

  ngOnInit() {
  }

}
