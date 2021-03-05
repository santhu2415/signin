import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PumpReadingsPage } from './pump-readings.page';

const routes: Routes = [
  {
    path: '',
    component: PumpReadingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PumpReadingsPageRoutingModule {}
