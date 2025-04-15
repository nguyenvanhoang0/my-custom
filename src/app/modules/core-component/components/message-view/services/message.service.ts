import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MessageLocation } from '../../../../../core/types/location.types';
import { IconName } from '../../../../../shared/components/icon/icon.type';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private _messagesSubject = new BehaviorSubject<Message[]>([]);
  readonly messages$ = this._messagesSubject.asObservable();
  private counter = 0;

  show(message: Partial<Message> & { type: MessageType }) {
    const newMsg: Message = {
      id: this.counter++,
      content: message.content || '',
      type: message.type,
      duration: message.duration ?? 3000,
      position: message.position ?? 'top',
    };

    const current = this._messagesSubject.value;
    this._messagesSubject.next([...current, newMsg]);

    // Auto remove after duration
    setTimeout(() => this.remove(newMsg.id), newMsg.duration);
  }

  loading(content: string): number {
    const id = this.counter++;
    const newMsg: Message = {
      id,
      content: content ?? 'loading...',
      type: 'loading',
      duration: 0,
    };
    const current = this._messagesSubject.value;
    this._messagesSubject.next([...current, newMsg]);
    return id;
  }

  remove(id: number) {
    this._messagesSubject.next(
      this._messagesSubject.value.filter((msg) => msg.id !== id)
    );
  }
}

export type MessageType = 'success' | 'error' | 'info' | 'warning' | 'loading';

export interface Message {
  id: number;
  content: string;
  type: MessageType;
  duration: number;
  position?: MessageLocation;
  icon?: IconName;
}
