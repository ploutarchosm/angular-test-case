import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'shared';
import { ProfilePageComponent } from './pages/profile-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageLayoutComponent } from '../../shared/components/page-layout/page-layout.component';

const routes: Routes = [
  {
    path: '',
    component: PageLayoutComponent,
    title: 'Profile',
    children: [{ path: '', component: ProfilePageComponent }],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [
    HttpClientModule,
    SharedModule,
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [ProfilePageComponent]
})
export class ProfileModule {}
