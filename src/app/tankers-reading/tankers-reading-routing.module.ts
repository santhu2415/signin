import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TankersReadingPage } from './tankers-reading.page';

const routes: Routes = [
  {
    path: '',
    component: TankersReadingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TankersReadingPageRoutingModule {}
