import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreFunctionRoutingModule } from './core-function-routing.module';
import { RouterOutlet } from '@angular/router';
import { CoreFunctionComponent } from './core-function.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { GuardComponent } from './components/guard/guard.component';
import { InterceptorsComponent } from './components/interceptors/interceptors.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [CoreFunctionComponent, GuardComponent, InterceptorsComponent],
  imports: [
    CommonModule,
    RouterOutlet,
    CoreFunctionRoutingModule,
    SharedModule,
    CodeBlockComponent,
  ],
})
export class CoreFunctionModule {}
