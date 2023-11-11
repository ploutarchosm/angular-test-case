import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services';
import { LayoutComponent } from './components/layout/layout.component';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';

@NgModule({
  imports: [CommonModule, RouterModule, HttpClientModule],
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
})
export class CoreModule {}
