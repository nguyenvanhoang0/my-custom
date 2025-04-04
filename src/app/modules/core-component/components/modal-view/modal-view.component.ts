import { Component } from '@angular/core';
import { location } from './components/modal/modal.types';

@Component({
  selector: 'app-modal-view',
  templateUrl: './modal-view.component.html',
  styleUrl: './modal-view.component.scss',
  standalone: false,
})
export class ModalViewComponent {
  isModalOpen = false;
  locations: location[] = [
    'top',
    'bottom',
    'left',
    'right',
    'top-right',
    'top-left',
    'bottom-right',
    'bottom-left',
    'center',
  ];
  selectedLocation: location = 'center';
  listContent = [
    'assets/img-svg/img_1.svg',
    'assets/img-svg/img_2.svg',
    'assets/img-svg/img_3.svg',
    'assets/img-svg/img_4.svg',
    'assets/img-svg/img_5.svg',
  ];
  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }

  onModalClosed() {
    this.isModalOpen = false;
  }
}
