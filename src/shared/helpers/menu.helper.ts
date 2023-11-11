import { INavigation } from '../types/menu.type';

export const menu: INavigation[] = [
  { label: 'Home', router: 'home', permissions: ['Admin', 'User'] },
  { label: 'Inventory', router: 'inventory', permissions: ['Admin'] },
  { label: 'Reports', router: 'reports', permissions: ['Admin'] },
  { label: 'Billing', router: 'billing', permissions: ['Admin'] },
  { label: 'Profile', router: 'profile', permissions: ['Admin', 'User'] },
];
