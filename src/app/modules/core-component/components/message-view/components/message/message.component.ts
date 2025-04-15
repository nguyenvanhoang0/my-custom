import { Component, OnInit } from '@angular/core';
import { Message, MessageService } from '../../services/message.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MessageItemComponent } from '../message-item/message-item.component';
import { MessageLocation } from '../../../../../../core/types/location.types';

@Component({
  selector: 'app-message',
  imports: [CommonModule, MessageItemComponent],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
})
export class MessageComponent implements OnInit {
  messages: Message[] = [];
  groupedMessages: Record<MessageLocation, Message[]> = {
    top: [],
    bottom: [],
    'top-left': [],
    'top-right': [],
    'bottom-left': [],
    'bottom-right': [],
    center: [],
  };

  positions: MessageLocation[] = [
    'top',
    'top-left',
    'top-right',
    'bottom',
    'bottom-left',
    'bottom-right',
    'center',
  ];

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.messageService.messages$.subscribe((msgs) => {
      this.messages = msgs;
      this.groupMessages();
    });
  }

  groupMessages() {
    this.groupedMessages = {
      top: [],
      bottom: [],
      'top-left': [],
      'top-right': [],
      'bottom-left': [],
      'bottom-right': [],
      center: [],
    };

    for (const msg of this.messages) {
      const pos = msg.position ?? 'top';
      this.groupedMessages[pos].push(msg);
    }
  }

  onClose(id: number) {
    this.messageService.remove(id);
  }
}
