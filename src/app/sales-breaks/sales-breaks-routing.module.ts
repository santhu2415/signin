import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalesBreaksPage } from './sales-breaks.page';

const routes: Routes = [
  {
    path: '',
    component: SalesBreaksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesBreaksPageRoutingModule {}
