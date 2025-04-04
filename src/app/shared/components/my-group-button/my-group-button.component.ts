import { Component, ContentChildren, Input, QueryList } from '@angular/core';
import { MyButtonComponent } from '../my-button/my-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-group-button',
  imports: [CommonModule],
  templateUrl: './my-group-button.component.html',
  styleUrl: './my-group-button.component.scss',
})
export class MyGroupButtonComponent {
  @Input() shape: 'round' | 'soft' | 'none' = 'soft'; // Hạn chế shape
  @Input() size: 'large' | 'small' | 'default' = 'default';
  @Input() type?: 'default' | 'primary' | 'dashed' | 'link' | 'text';
  @Input() customColor?: string;
  @Input() block: boolean = false;

  @ContentChildren(MyButtonComponent) buttons!: QueryList<MyButtonComponent>;

  ngAfterContentInit() {
    this.buttons.forEach((button) => {
      button.size = this.size;

      // Hủy shape của button con và áp dụng shape của group
      button.shape = 'none'; // Hủy hết shape của button con

      // Cập nhật các thuộc tính còn lại nếu chưa có từ button con
      button.type = button.type || this.type || 'default';
      button.customColor = this.customColor;
    });
  }

  get groupClass() {
    return {
      'group-container': true,
      [`shape-${this.shape}`]: true,
      [`size-${this.size}`]: true,
      block: this.block,
    };
  }
}
