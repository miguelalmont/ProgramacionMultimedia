import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CallInfoPageRoutingModule } from './call-info-routing.module';

import { CallInfoPage } from './call-info.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CallInfoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CallInfoPage]
})
export class CallInfoPageModule {}
