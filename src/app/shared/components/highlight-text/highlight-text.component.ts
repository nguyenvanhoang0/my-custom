import { Component, Input, OnChanges } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HighlightConfig } from '../../../core/types/highlight-text.type';
import { EHighlightColor } from '../../../core/enums/highlight-colors.enum';

@Component({
  selector: 'app-highlight-text',
  imports: [],
  templateUrl: './highlight-text.component.html',
  styleUrl: './highlight-text.component.scss',
})
export class HighlightTextComponent implements OnChanges {
  @Input() config?: HighlightConfig;
  highlightedText: SafeHtml = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges() {
    if (!this.config) return;

    let formattedText = this.config.text;

    this.config.links.forEach(({ word, url }) => {
      const linkHtml = `<a href="${url}" target="_blank">${word}</a>`;
      formattedText = formattedText.replace(
        new RegExp(`\\b${word}\\b`, 'gi'),
        linkHtml
      );
    });

    this.config.highlightWords.forEach(({ word, color }) => {
      if (Object.values(EHighlightColor).includes(color)) {
        const highlightHtml = `<span style="color: ${color}; font-weight: bold;">${word}</span>`;
        formattedText = formattedText.replace(
          new RegExp(`\\b${word}\\b`, 'gi'),
          highlightHtml
        );
      }
    });

    this.highlightedText =
      this.sanitizer.bypassSecurityTrustHtml(formattedText);
  }
}
