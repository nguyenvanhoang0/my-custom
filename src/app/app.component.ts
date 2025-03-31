import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: false,
})
export class AppComponent {
  title = 'my-custom';
  navBarOpened = true;
  isLeftSidebar = true;

  leftSidebarWidth = 250;
  rightSidebarWidth = 250;
  lastLeftSidebarWidth = 250;
  lastRightSidebarWidth = 250;

  toggleNavBar() {
    this.navBarOpened = !this.navBarOpened;

    if (!this.navBarOpened) {
      // Lưu lại width trước khi đóng
      this.lastLeftSidebarWidth = this.leftSidebarWidth;
      this.lastRightSidebarWidth = this.rightSidebarWidth;

      // Đặt width về 0 để ẩn sidebar
      this.leftSidebarWidth = 0;
      this.rightSidebarWidth = 0;
    } else {
      // Phục hồi width khi mở lại
      this.leftSidebarWidth = this.lastLeftSidebarWidth;
      this.rightSidebarWidth = this.lastRightSidebarWidth;
    }
  }

  onSidebarResize(event: { width: number; isLeft: boolean }) {
    if (event.isLeft) {
      this.leftSidebarWidth = event.width;
      this.lastLeftSidebarWidth = event.width;
    } else {
      this.rightSidebarWidth = event.width;
      this.lastRightSidebarWidth = event.width;
    }
  }
}
