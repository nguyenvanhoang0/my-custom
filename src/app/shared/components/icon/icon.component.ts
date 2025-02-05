import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconName, ICONS } from './icon.type';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-icon',
  imports: [CommonModule, FontAwesomeModule],
  standalone: true,
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
})
export class IconComponent {
  @Input() icon: IconName = 'add';

  get faIcon() {
    return ICONS[this.icon];
  }
}
