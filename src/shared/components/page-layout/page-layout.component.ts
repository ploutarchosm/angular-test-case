import { Component, OnDestroy, OnInit } from '@angular/core';
import { EIcon, INavigation } from '../../types/menu.type';
import { ProfileService } from '../../services';
import { Subject, takeUntil } from 'rxjs';
import { IProfile } from '../../../app/profile';

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.scss'],
})
export class PageLayoutComponent implements OnInit, OnDestroy {
  navItems: INavigation[] = [];
  icon = EIcon;
  _notifier = new Subject<void>();
  profile!: IProfile;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService
      .initialProfile$()
      .pipe(takeUntil(this._notifier))
      .subscribe({
        next: profile => {
          if (profile) {
            this.profile = profile;
            this.navItems = this.profileService.rebuildMenu(profile.Role);
          }
        },
      });
  }

  ngOnDestroy() {
    this._notifier.next();
    this._notifier.complete();
  }
}
