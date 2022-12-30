import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages-component',
  templateUrl: './messages-component.component.html',
  styleUrls: ['./messages-component.component.css']
})
export class MessagesComponentComponent {
  constructor(public messageService: MessageService) {}

  ngOnInit() {
  }
}

