import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardComponent } from './components/guard/guard.component';
import { InterceptorsComponent } from './components/interceptors/interceptors.component';

const routes: Routes = [
  {
    path: 'guard',
    component: GuardComponent,
  },
  {
    path: 'interceptors',
    component: InterceptorsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreFunctionRoutingModule {}
