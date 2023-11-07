import { Component } from '@angular/core';
import { BillingPageService } from '../services';

@Component({
  selector: 'app-billing-page',
  templateUrl: './billing-page.component.html',
  providers: [BillingPageService],
})
export class BillingPageComponent {}
