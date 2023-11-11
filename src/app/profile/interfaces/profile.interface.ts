export enum Role {
  User = 'User',
  Admin = 'Admin',
}

export interface IProfile {
  Email: string;
  FirstName: string;
  LastName: string;
  PhoneNumber: number;
  WebSiteURL: string | null;
  AuthToken: string | undefined;
  Role: Role | undefined;
}
