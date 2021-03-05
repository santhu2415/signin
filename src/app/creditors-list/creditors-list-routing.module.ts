import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreditorsListPage } from './creditors-list.page';

const routes: Routes = [
  {
    path: '',
    component: CreditorsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreditorsListPageRoutingModule {}
