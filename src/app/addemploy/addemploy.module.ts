import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddemployPageRoutingModule } from './addemploy-routing.module';

import { AddemployPage } from './addemploy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddemployPageRoutingModule
  ],
  declarations: [AddemployPage]
})
export class AddemployPageModule {}
