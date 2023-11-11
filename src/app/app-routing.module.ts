import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/helpers/auth.guard';
import { Role } from './profile';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('app/home/home.module').then(m => m.HomeModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'inventory',
    loadChildren: () =>
      import('app/inventory/inventory.module').then(m => m.InventoryModule),
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] },
  },
  {
    path: 'reports',
    loadChildren: () =>
      import('app/reports/reports.module').then(m => m.ReportsModule),
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] },
  },
  {
    path: 'billing',
    loadChildren: () =>
      import('app/billing/billing.module').then(m => m.BillingModule),
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] },
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('app/profile/profile.module').then(m => m.ProfileModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('app/auth/auth.module').then(m => m.AuthModule),
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
