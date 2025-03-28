import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'core',
    loadChildren: () =>
      import('./modules/core-function/core-function.module').then(
        (module) => module.CoreFunctionModule
      ),
  },
  {
    path: 'components',
    loadChildren: () =>
      import('./modules/core-component/core-component.module').then(
        (module) => module.CoreComponentModule
      ),
  },
  {
    path: '**',
    redirectTo: 'core',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
