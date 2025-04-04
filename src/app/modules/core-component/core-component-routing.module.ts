import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsOverviewComponent } from './components/components-overview/components-overview.component';
import { ModalViewComponent } from './components/modal-view/modal-view.component';

const routes: Routes = [
  {
    path: 'overview',
    component: ComponentsOverviewComponent,
  },
  {
    path: 'modal',
    component: ModalViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreComponentRoutingModule {}
