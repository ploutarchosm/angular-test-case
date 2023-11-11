import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { AuthLoginComponent } from './pages/auth-login/auth-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: AuthPageComponent,
    children: [
      {
        path: 'login',
        component: AuthLoginComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [AuthPageComponent, AuthLoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
})
export class AuthModule {}
