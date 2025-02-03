import { Component } from '@angular/core';
import { IRoute, MAIN_ROUTES } from '../../core/types/routes.types';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-nav-bar-content',
  templateUrl: './nav-bar-content.component.html',
  styleUrl: './nav-bar-content.component.scss',
})
export class NavBarContentComponent {
  protected readonly MAIN_ROUTES = MAIN_ROUTES;

  router = '';
  constructor(
    private routerService: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.routerService.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.router = this.routerService.url;
        console.log('router', this.router);

        this.updateActiveRoutes(this.MAIN_ROUTES);
      });

    this.router = this.routerService.url;
    console.log(this.router);

    this.updateActiveRoutes(this.MAIN_ROUTES);
  }

  updateActiveRoutes(routes: IRoute[]) {
    routes.forEach((route) => {
      route.activated = route.route === this.router;
      console.log(route.route === this.router);

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
