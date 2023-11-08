import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services';
import { LayoutComponent } from './components/layout/layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  providers: [AuthService],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
})
export class CoreModule {}
