import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'shared';
import { BillingPageComponent } from './pages/billing-page.component';

const routes: Routes = [
  { path: '', component: BillingPageComponent, title: 'Billing' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [
    HttpClientModule,
    SharedModule,
    RouterModule.forChild(routes),
    CommonModule,
  ],
  declarations: [BillingPageComponent],
})
export class BillingModule {}
