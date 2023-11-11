import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from './services';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { RouterModule } from '@angular/router';
import { PageContentComponent } from './components/page-content/page-content.component';
import { PageLayoutComponent } from './components/page-layout/page-layout.component';
import {FaSolidHouseIcon} from "./svg/fa-solid-house-icon";
import {FaSolidWarehouseIcon} from "./svg/fa-solid-warehouse-icon";
import {FaSolidUserIcon} from "./svg/fa-solid-user-icon";
import {FaSolidReceiptIcon} from "./svg/fa-solid-receipt-icon";
import {FaSolidChartSimpleIcon} from "./svg/fa-solid-chart-simple-icon";

const icons = [
    FaSolidHouseIcon,
    FaSolidWarehouseIcon,
    FaSolidUserIcon,
    FaSolidReceiptIcon,
    FaSolidChartSimpleIcon
]
@NgModule({
  imports: [CommonModule, RouterModule],
  providers: [ProfileService],
  declarations: [PageTitleComponent, PageContentComponent, PageLayoutComponent, icons],
  exports: [PageTitleComponent, PageContentComponent, PageLayoutComponent, icons],
})
export class SharedModule {}
