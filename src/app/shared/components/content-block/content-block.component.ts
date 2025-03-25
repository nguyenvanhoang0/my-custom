import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HighlightConfig } from '../../../core/types/highlight-text.type';
import { HighlightTextComponent } from '../highlight-text/highlight-text.component';

@Component({
  selector: 'app-content-block',
  imports: [CommonModule, HighlightTextComponent],
  standalone: true,
  templateUrl: './content-block.component.html',
  styleUrl: './content-block.component.scss',
})
export class ContentBlockComponent {
  @Input() title?: string;
  @Input() content?: HighlightConfig;
}
