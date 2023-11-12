import { Injectable } from '@angular/core';
import { AuthService } from '../../core/services';
import { Role, TProfileServerModel } from '../../app/profile';
import { INavigation } from '../types/menu.type';
import { menu } from '../helpers/menu.helper';

@Injectable()
export class ProfileService {
  constructor(private authService: AuthService) {}

  initialProfile$() {
    return this.authService.profile;
  }

  updateProfile(profile: TProfileServerModel) {
    return this.authService.updateProfile(profile);
  }

  rebuildMenu(role: Role | undefined) {
    const newMenu: INavigation[] = [];
    menu.map(item => {
      if (
        item.permissions &&
        item.permissions.some(x => x == this.authService.profileRoles)
      ) {
        newMenu.push(item);
      }
    });
    return newMenu;
  }
}
