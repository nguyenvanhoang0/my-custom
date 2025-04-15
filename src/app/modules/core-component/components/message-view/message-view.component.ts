import { Component } from '@angular/core';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-message-view',
  templateUrl: './message-view.component.html',
  styleUrl: './message-view.component.scss',
  standalone: false,
})
export class MessageViewComponent {
  constructor(private message: MessageService) {}

  showMessage() {
    this.message.show({
      type: 'warning',
      content: 'Thành công!',
      duration: 20000,
    });
  }
  showMessage1() {
    this.message.show({
      type: 'error',
      content: 'Thành công!',
      duration: 20000,
      position: 'bottom-right',
    });
  }
  showMessage2() {
    this.message.show({
      type: 'success',
      content: 'Thành công!',
      duration: 20000,
      position: 'top-left',
    });
  }

  showMessage3() {
    this.message.show({
      type: 'info',
      content: 'Thành công xxxxxx!',
      duration: 20000,
      position: 'top-left',
    });
  }
  showMessageLoading() {
    const id = this.message.loading('Đang gửi dữ liệu...');

    setTimeout(() => {
      this.message.remove(id);
      this.message.show({
        type: 'success',
        content: 'Dữ liệu đã được gửi thành công!',
        duration: 2000,
      });
    }, 30000);
  }
}
