import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreFunctionRoutingModule } from './core-function-routing.module';
import { RouterOutlet } from '@angular/router';
import { CoreFunctionComponent } from './core-function.component';

@NgModule({
  declarations: [CoreFunctionComponent],
  imports: [CommonModule, RouterOutlet, CoreFunctionRoutingModule],
})
export class CoreFunctionModule {}
