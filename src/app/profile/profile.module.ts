import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'shared';
import { ProfilePageComponent } from './pages/profile-page.component';

const routes: Routes = [
  { path: '', component: ProfilePageComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [
    HttpClientModule,
    SharedModule,
    RouterModule.forChild(routes),
    CommonModule,
  ],
  declarations: [ProfilePageComponent],
})
export class ProfileModule {}
