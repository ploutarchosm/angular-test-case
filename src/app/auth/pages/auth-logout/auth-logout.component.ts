import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../core/services';

@Component({
  selector: 'app-auth-logout',
  template: '<p>Logout....</p>',
})
export class AuthLogoutComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.logout();
  }
}
