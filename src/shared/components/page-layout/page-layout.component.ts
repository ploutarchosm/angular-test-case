import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services';
import { Role } from '../../../app/profile';
import {INavigation} from "../../types/menu.type";
import {menu} from "../../helpers/menu.helper";

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.scss'],
})
export class PageLayoutComponent implements OnInit {
  navItems: INavigation[] = [];
  profile = this.authService.profileValue;

  constructor(
    private authService: AuthService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    if (this.profile) {
      this.rebuildMenu(this.profile.Role);
    }
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
    this.navItems = newMenu;
    this.cdr.detectChanges();
  }
}
