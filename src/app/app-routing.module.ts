import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'mainpage',
    loadChildren: () => import('./mainpage/mainpage.module').then( m => m.MainpagePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cash',
    loadChildren: () => import('./cash/cash.module').then( m => m.CashPageModule)
  },
  {
    path: 'pricesandstocks',
    loadChildren: () => import('./pricesandstocks/pricesandstocks.module').then( m => m.PricesandstocksPageModule)
  },
  {
    path: 'manager',
    loadChildren: () => import('./manager/manager.module').then( m => m.ManagerPageModule)
  },
  {
    path: 'cashier',
    loadChildren: () => import('./cashier/cashier.module').then( m => m.CashierPageModule)
  },
  {
    path: 'tankers-reading',
    loadChildren: () => import('./tankers-reading/tankers-reading.module').then( m => m.TankersReadingPageModule)
  },
  {
    path: 'addemploy',
    loadChildren: () => import('./addemploy/addemploy.module').then( m => m.AddemployPageModule)
  },
  {
    path: 'creditors-list',
    loadChildren: () => import('./creditors-list/creditors-list.module').then( m => m.CreditorsListPageModule)
  },
  {
    path: 'invoice-page',
    loadChildren: () => import('./invoice-page/invoice-page.module').then( m => m.InvoicePagePageModule)
  },
  {
    path: 'attendances',
    loadChildren: () => import('./attendances/attendances.module').then( m => m.AttendancesPageModule)
  },
  {
    path: 'pump-readings',
    loadChildren: () => import('./pump-readings/pump-readings.module').then( m => m.PumpReadingsPageModule)
  },
  {
    path: 'sales-breaks',
    loadChildren: () => import('./sales-breaks/sales-breaks.module').then( m => m.SalesBreaksPageModule)
  },
  {
    path: 'add-creditors',
    loadChildren: () => import('./add-creditors/add-creditors.module').then( m => m.AddCreditorsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
