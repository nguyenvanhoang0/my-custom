import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalService } from '../../services/modal.service';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../../../../../shared/components/icon/icon.component';
import { location } from '../../../../../../core/types/location.types';

@Component({
  selector: 'app-modal',
  imports: [CommonModule, IconComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  @Input() closeMethod: 'button' | 'outside' | undefined;
  @Input() id?: string;
  @Input() location?: location;

  @Input() isOpen = true;
  @Output() closed = new EventEmitter<void>();

  private modalSub?: Subscription;

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    if (this.id) {
      this.modalService.register(this.id);
      this.modalSub = this.modalService
        .getModalState(this.id)
        .subscribe((state) => (this.isOpen = state));
    }
  }

  closeModal() {
    this.isOpen = false;
    setTimeout(() => this.closed.emit(), 300);
    if (this.id) {
      this.modalService.close(this.id);
    }
  }

  onOverlayClick() {
    if (this.closeMethod === 'outside') {
      this.closeModal();
    }
  }

  ngOnDestroy() {
    if (this.id) {
      this.modalService.unregister(this.id);
    }
    this.modalSub?.unsubscribe();
  }
}
