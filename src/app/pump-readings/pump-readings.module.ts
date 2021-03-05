import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PumpReadingsPageRoutingModule } from './pump-readings-routing.module';

import { PumpReadingsPage } from './pump-readings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PumpReadingsPageRoutingModule
  ],
  declarations: [PumpReadingsPage]
})
export class PumpReadingsPageModule {}
