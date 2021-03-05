import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCreditorsPageRoutingModule } from './add-creditors-routing.module';

import { AddCreditorsPage } from './add-creditors.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddCreditorsPageRoutingModule
  ],
  declarations: [AddCreditorsPage]
})
export class AddCreditorsPageModule {}
