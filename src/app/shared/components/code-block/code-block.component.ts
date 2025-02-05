import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import hljs from 'highlight.js';
import { SharedModule } from '../../shared.module';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-code-block',
  imports: [CommonModule, SharedModule, IconComponent],
  standalone: true,
  templateUrl: './code-block.component.html',
  styleUrl: './code-block.component.scss',
})
export class CodeBlockComponent implements AfterViewInit {
  @Input() code = '';
  @Input() language = 'typescript';
  @Input() label = true;
  @ViewChild('codeElement', { static: false }) codeElement!: ElementRef;

  ngAfterViewInit() {
    if (this.codeElement) {
      hljs.highlightElement(this.codeElement.nativeElement);
    }
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.code).then(() => {
      alert('Code copied to clipboard!');
    });
  }
}
