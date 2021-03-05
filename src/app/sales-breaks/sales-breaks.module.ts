import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalesBreaksPageRoutingModule } from './sales-breaks-routing.module';

import { SalesBreaksPage } from './sales-breaks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalesBreaksPageRoutingModule
  ],
  declarations: [SalesBreaksPage]
})
export class SalesBreaksPageModule {}
