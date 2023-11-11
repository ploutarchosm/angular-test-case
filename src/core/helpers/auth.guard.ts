import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../services';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const profile = this.authService.profileValue;

    if (profile) {
      if (route.data['roles'] && !route.data['roles'].includes(profile.Role)) {
        this.router.navigate(['/']);
        return false;
      }
      return true;
    }
    this.router.navigate(['/auth/login'], {
      queryParams: { returnUrl: state.url },
    });
    return false;
  }
}
