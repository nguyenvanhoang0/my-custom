import { EHighlightColor } from '../enums/highlight-colors.enum';

export type HighlightConfig = {
  text: string;
  highlightWords: { word: string; color: EHighlightColor }[];
  links: { word: string; url: string }[];
};
