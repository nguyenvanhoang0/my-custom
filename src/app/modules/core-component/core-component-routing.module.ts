import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsOverviewComponent } from './components/components-overview/components-overview.component';

const routes: Routes = [
  {
    path: 'overview',
    component: ComponentsOverviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreComponentRoutingModule {}
