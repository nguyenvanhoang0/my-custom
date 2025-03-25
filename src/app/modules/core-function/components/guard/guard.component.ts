import { Component } from '@angular/core';
import {
  GUARD_CONTENT,
  TITLE_AND_DESCRIBE,
} from '../../../../constants/core-function/guard';

@Component({
  selector: 'app-guard',
  templateUrl: './guard.component.html',
  styleUrl: './guard.component.scss',
  standalone: false,
})
export class GuardComponent {
  guardContent = GUARD_CONTENT;
  titleAndDescribe = TITLE_AND_DESCRIBE;
}
