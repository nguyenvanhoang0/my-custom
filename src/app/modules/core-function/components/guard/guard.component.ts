import { Component } from '@angular/core';

@Component({
  selector: 'app-guard',
  templateUrl: './guard.component.html',
  styleUrl: './guard.component.scss',
  standalone: false,
})
export class GuardComponent {
  code = `export class NavBarContentComponent {
  
}
`;
  code2 = `body {
  background-color: #f4f4f4;
  background-color: #aaaaaa;
}`;
  code3 = `header {
  position: sticky;
  top: 0;
  width: 100%;
  background: white;
}

.body {
  display: flex;
  // position: absolute;

  nav {
    width: 16%;
    height: 100vh;
    overflow-y: auto;
    position: fixed;
    border-right: 1px solid #f0f0f0;

    &::-webkit-scrollbar {
      display: none;
    }

    &:hover {
      &::-webkit-scrollbar {
        display: block;
      }
    }
  }

  .content {
    margin-left: 16%;
  }
}
`;

  code4 = `<div class="content">
  <ul>
    <ng-container
      *ngTemplateOutlet="menuTpl; context: { $implicit: MAIN_ROUTES }"
    ></ng-container>
    <ng-template #menuTpl let-menus>
      <ng-container *ngFor="let menu of menus">
        <li
          [ngClass]="{ active: menu.activated }"
          (click)="onNavItemClick(menu)"
        >
          <div class="d-flex flex-dir-row gap-16">
            <app-icon [icon]="menu.icon"></app-icon>
            <span>{{ menu.title }}</span>
          </div>
          <app-icon
            *ngIf="menu.children"
            class="icon"
            [ngClass]="menu.opened ? 'rotated' : ''"
            [icon]="'chevronRight'"
          ></app-icon>
        </li>
        <ul
          *ngIf="menu.children"
          [@expandCollapse]="menu.opened ? 'open' : 'closed'"
          class="children"
        >
          <ng-container
            *ngTemplateOutlet="menuTpl; context: { $implicit: menu.children }"
          ></ng-container>
        </ul>
      </ng-container>
    </ng-template>
  </ul>
</div>
`;
}
