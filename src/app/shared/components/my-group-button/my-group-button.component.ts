import { Component, ContentChildren, Input, QueryList } from '@angular/core';
import { MyButtonComponent } from '../my-button/my-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-group-button',
  imports: [CommonModule, MyButtonComponent],
  templateUrl: './my-group-button.component.html',
  styleUrl: './my-group-button.component.scss',
})
export class MyGroupButtonComponent {
  @Input() shape: 'round' | 'soft' | 'none' = 'soft';
  @Input() size: 'large' | 'small' | 'default' = 'default';
  @Input() type?: 'default' | 'primary' | 'dashed' | 'link' | 'text';
  @Input() customColor?: string;
  @Input() block: boolean = false;

  @ContentChildren(MyButtonComponent) buttons!: QueryList<MyButtonComponent>;

  ngAfterContentInit() {
    this.buttons.forEach((button) => {
      button.size = this.size;

      button.shape = 'none';

      button.type = button.type || this.type || 'default';
      button.block = this.block;
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
