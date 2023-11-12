import { FormTyped } from '../../../shared/types/form.type';

export enum Role {
  User = 'User',
  Admin = 'Admin',
}

export interface IProfile {
  Id: number;
  Email: string;
  FirstName: string;
  LastName: string;
  PhoneNumber: string;
  WebSiteURL: string | null;
  AuthToken?: string | undefined;
  Role: Role | undefined;
}

export type TProfileFormModel = Omit<FormTyped<IProfile>, 'AuthToken' | 'Role'>;
export type TProfileServerModel = Omit<
  IProfile,
  'Email' | 'AuthToken' | 'Role'
>;
