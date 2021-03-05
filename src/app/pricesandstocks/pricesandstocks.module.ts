import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PricesandstocksPageRoutingModule } from './pricesandstocks-routing.module';

import { PricesandstocksPage } from './pricesandstocks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PricesandstocksPageRoutingModule
  ],
  declarations: [PricesandstocksPage]
})
export class PricesandstocksPageModule {}
