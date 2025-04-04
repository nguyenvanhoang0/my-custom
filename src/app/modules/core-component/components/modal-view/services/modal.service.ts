import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ModalService {
  private modals: { [id: string]: Subject<boolean> } = {};

  register(id: string) {
    if (!this.modals[id]) {
      this.modals[id] = new Subject<boolean>();
    }
  }

  unregister(id: string) {
    delete this.modals[id];
  }

  open(id: string) {
    this.modals[id]?.next(true);
  }

  close(id: string) {
    this.modals[id]?.next(false);
  }

  getModalState(id: string): Observable<boolean> {
    this.register(id);
    return this.modals[id].asObservable();
  }
}
