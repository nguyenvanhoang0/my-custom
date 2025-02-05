import { Component } from '@angular/core';
import { IRoute, MAIN_ROUTES } from '../../core/types/routes.types';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-nav-bar-content',
  templateUrl: './nav-bar-content.component.html',
  styleUrl: './nav-bar-content.component.scss',
  animations: [
    trigger('expandCollapse', [
      state(
        'closed',
        style({ clipPath: 'inset(0 0 100% 0)', opacity: 0, height: '0px' })
      ),
      state('open', style({ clipPath: 'inset(0 0 0 0)', opacity: 1 })),
      transition('closed <=> open', animate('200ms ease-in-out')),
    ]),
  ],
  standalone: false,
})
export class NavBarContentComponent {
  protected readonly MAIN_ROUTES = MAIN_ROUTES;

  router = '';

  constructor(private routerService: Router) {}

  ngOnInit() {
    this.routerService.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.router = this.routerService.url;
        this.updateActiveRoutes(this.MAIN_ROUTES);
      });

    this.router = this.routerService.url;
    this.updateActiveRoutes(this.MAIN_ROUTES);
  }

  updateActiveRoutes(routes: IRoute[]) {
    routes.forEach((route) => {
      route.activated = route.route === this.router;
      if (route.children) {
        this.updateActiveRoutes(route.children);
      }
    });
  }

  onNavItemClick(route: IRoute) {
    console.log(route.route);
    if (route.children) {
      route.opened = !route.opened;
    } else {
      this.routerService.navigate([route.route]);
    }
  }
}
