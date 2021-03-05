import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TankersReadingPageRoutingModule } from './tankers-reading-routing.module';

import { TankersReadingPage } from './tankers-reading.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TankersReadingPageRoutingModule
  ],
  declarations: [TankersReadingPage]
})
export class TankersReadingPageModule {}
