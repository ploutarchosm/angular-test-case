import { Component } from '@angular/core';
import { AuthService } from '../../services';

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

  constructor(private authService: AuthService) {}

  get isAuth() {
    return !!this.authService.profileValue;
  }
}
