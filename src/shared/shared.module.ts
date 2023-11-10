import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from './services';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { RouterModule } from '@angular/router';
import { PageContentComponent } from './components/page-content/page-content.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  providers: [ProfileService],
  declarations: [PageTitleComponent, PageContentComponent],
  exports: [PageTitleComponent, PageContentComponent],
})
export class SharedModule {}
