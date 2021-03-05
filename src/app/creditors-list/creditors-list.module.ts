import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreditorsListPageRoutingModule } from './creditors-list-routing.module';

import { CreditorsListPage } from './creditors-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreditorsListPageRoutingModule
  ],
  declarations: [CreditorsListPage]
})
export class CreditorsListPageModule {}
