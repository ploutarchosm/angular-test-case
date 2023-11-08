import { Component } from '@angular/core';

interface INavigation {
  label: string;
  router: string;
}

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  readonly navItems: INavigation[] = [
    { label: 'Home', router: 'home' },
    { label: 'Inventory', router: 'inventory' },
    { label: 'Reports', router: 'reports' },
    { label: 'Billing', router: 'billing' },
    { label: 'Profile', router: 'profile' },
  ];
}
