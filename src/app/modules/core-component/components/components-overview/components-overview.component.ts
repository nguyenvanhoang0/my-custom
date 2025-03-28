import { Component } from '@angular/core';

@Component({
  selector: 'app-components-overview',
  templateUrl: './components-overview.component.html',
  styleUrl: './components-overview.component.scss',
  standalone: false,
})
export class ComponentsOverviewComponent {
  listContent = [
    'assets/img-svg/img_1.svg',
    'assets/img-svg/img_2.svg',
    'assets/img-svg/img_3.svg',
    'assets/img-svg/img_4.svg',
    'assets/img-svg/img_5.svg',
  ];
}
