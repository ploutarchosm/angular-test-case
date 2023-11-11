
export enum EIcon  {
    SolidChartSimple = 'SolidChartSimple',
    SolidHouse = 'SolidHouse',
    SolidReceipt = 'SolidReceipt',
    SolidUser = 'SolidUser',
    SolidWareHouse = 'SolidWareHouse',
}
export interface INavigation {
  label: string;
  router: string;
  permissions?: string[];
  icon: EIcon;
}
