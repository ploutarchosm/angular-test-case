import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'shared';
import { InventoryPageComponent } from './pages/inventory-page.component';

const routes: Routes = [
  { path: '', component: InventoryPageComponent, title: 'Inventory' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [
    HttpClientModule,
    SharedModule,
    RouterModule.forChild(routes),
    CommonModule,
  ],
  declarations: [InventoryPageComponent],
})
export class InventoryModule {}
