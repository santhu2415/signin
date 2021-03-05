import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddemployPage } from './addemploy.page';

const routes: Routes = [
  {
    path: '',
    component: AddemployPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddemployPageRoutingModule {}
