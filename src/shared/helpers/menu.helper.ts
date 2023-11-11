import {EIcon, INavigation} from '../types/menu.type';

export const menu: INavigation[] = [
  { label: 'Home', router: 'home', permissions: ['Admin', 'User'], icon: EIcon.SolidHouse },
  { label: 'Inventory', router: 'inventory', permissions: ['Admin'], icon: EIcon.SolidWareHouse },
  { label: 'Reports', router: 'reports', permissions: ['Admin'], icon: EIcon.SolidChartSimple},
  { label: 'Billing', router: 'billing', permissions: ['Admin'], icon: EIcon.SolidReceipt },
  { label: 'Profile', router: 'profile', permissions: ['Admin', 'User'], icon: EIcon.SolidUser },
];
