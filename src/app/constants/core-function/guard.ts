import { EHighlightColor } from '../../core/enums/highlight-colors.enum';
import { IcontentBlock } from '../../core/types/content-block.type';

export const TITLE_AND_DESCRIBE: IcontentBlock = {
  title: 'guard',
  content: {
    text: `To support existing teams that would like to use signal inputs, 
    the Angular team provides an automated migration that converts @Input fields to the new input() API.`,

    highlightWords: [
      { word: 'Angular', color: EHighlightColor.Red },
      { word: 'API', color: EHighlightColor.Blue },
      { word: 'migration', color: EHighlightColor.Green },
    ],

    links: [{ word: 'signal inputs', url: 'https://angular.dev' }],
  },
};

export const GUARD_CONTENT = `import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
`;
