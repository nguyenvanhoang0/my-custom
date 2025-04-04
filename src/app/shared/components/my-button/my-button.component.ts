import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-button',
  imports: [CommonModule],
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.scss',
})
export class MyButtonComponent {
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() ghost: boolean = false;
  @Input() shape: 'circle' | 'round' | 'soft' | 'none' = 'soft';
  @Input() size: 'large' | 'small' | 'default' = 'default';
  @Input() type: 'default' | 'primary' | 'dashed' | 'link' | 'text' = 'default';
  @Input() block: boolean = false;
  @Input() customColor?: string;

  get buttonClass() {
    return {
      disabled: this.disabled,
      ghost: this.ghost,
      block: this.block,
      [`shape-${this.shape}`]: !!this.shape,
      [`size-${this.size}`]: true,
      [`type-${this.type}`]: true,
    };
  }

  get buttonStyle() {
    if (!this.customColor) return {};

    const isGhost = this.ghost;
    return {
      backgroundColor: isGhost ? 'transparent' : this.customColor,
      color: isGhost ? this.customColor : '#fff',
      borderColor: this.customColor,
    };
  }
}
