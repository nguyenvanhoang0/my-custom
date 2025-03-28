import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreComponentRoutingModule } from './core-component-routing.module';
import { CoreComponentComponent } from './core-component.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { ComponentsOverviewComponent } from './components/components-overview/components-overview.component';

@NgModule({
  declarations: [CoreComponentComponent, ComponentsOverviewComponent],
  imports: [CommonModule, CoreComponentRoutingModule, CardComponent],
})
export class CoreComponentModule {}
