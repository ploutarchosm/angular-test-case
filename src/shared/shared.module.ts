import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from './services';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { RouterModule } from '@angular/router';
import { PageContentComponent } from './components/page-content/page-content.component';
import { PageLayoutComponent } from './components/page-layout/page-layout.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { AppFaSolidHouseIconComponent } from './svg/fa-solid-house-icon';
import { AppFaSolidWarehouseIconComponent } from './svg/fa-solid-warehouse-icon';
import { AppFaSolidUserIconComponent } from './svg/fa-solid-user-icon';
import { AppFaSolidReceiptIconComponent } from './svg/fa-solid-receipt-icon';
import { AppFaSolidChartSimpleIconComponent } from './svg/fa-solid-chart-simple-icon';
import { AppFaSolidRightFromBracketIconComponent } from './svg/fa-solid-right-from-bracket-icon';

const icons = [
  AppFaSolidHouseIconComponent,
  AppFaSolidWarehouseIconComponent,
  AppFaSolidUserIconComponent,
  AppFaSolidReceiptIconComponent,
  AppFaSolidChartSimpleIconComponent,
  AppFaSolidRightFromBracketIconComponent,
];
@NgModule({
  imports: [CommonModule, RouterModule],
  providers: [ProfileService],
  declarations: [
    PageTitleComponent,
    PageContentComponent,
    PageLayoutComponent,
    icons,
    DropdownDirective,
  ],
  exports: [
    PageTitleComponent,
    PageContentComponent,
    PageLayoutComponent,
    icons,
    DropdownDirective,
  ],
})
export class SharedModule {}
