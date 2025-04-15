import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Message } from '../../services/message.service';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../../../../../shared/components/icon/icon.component';
import { IconName } from '../../../../../../shared/components/icon/icon.type';

@Component({
  selector: 'app-message-item',
  imports: [CommonModule, IconComponent],
  templateUrl: './message-item.component.html',
  styleUrl: './message-item.component.scss',
})
export class MessageItemComponent {
  @Input() message!: Message;
  @Output() close = new EventEmitter<void>();

  get icon(): IconName | undefined {
    if (this.message.icon) return this.message.icon;

    // Icon mặc định theo type
    switch (this.message.type) {
      case 'success':
        return 'check';
      case 'error':
        return 'close';
      case 'warning':
        return 'triangleExclamation';
      case 'info':
        return 'exclamation';
      case 'loading':
        return 'spinner';
      default:
        return undefined;
    }
  }
}
