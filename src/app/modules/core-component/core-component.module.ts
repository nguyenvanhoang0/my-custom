import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CoreComponentRoutingModule } from './core-component-routing.module';
import { CoreComponentComponent } from './core-component.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { ComponentsOverviewComponent } from './components/components-overview/components-overview.component';
import { ModalComponent } from './components/modal-view/components/modal/modal.component';
import { ModalViewComponent } from './components/modal-view/modal-view.component';
import { MyButtonComponent } from '../../shared/components/my-button/my-button.component';
import { MyGroupButtonComponent } from '../../shared/components/my-group-button/my-group-button.component';
import { MessageViewComponent } from './components/message-view/message-view.component';
import { MessageComponent } from './components/message-view/components/message/message.component';

@NgModule({
  declarations: [
    CoreComponentComponent,
    ComponentsOverviewComponent,
    ModalViewComponent,
    MessageViewComponent,
  ],
  imports: [
    CommonModule,
    CoreComponentRoutingModule,
    FormsModule,
    CardComponent,
    ModalComponent,
    MyButtonComponent,
    MyGroupButtonComponent,
    MessageComponent,
  ],
})
export class CoreComponentModule {}
