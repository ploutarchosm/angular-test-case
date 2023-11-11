import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import {IProfile, TProfileServerModel} from '../../app/profile';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private profileSubject!: BehaviorSubject<IProfile | null>;
  public profile!: Observable<IProfile | null>;

  protected baseUrl = `${environment.apiUrl}/auth`;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.profileSubject = new BehaviorSubject(
      JSON.parse(localStorage.getItem('user')!)
    );
    this.profile = this.profileSubject.asObservable();
  }

  public get profileValue() {
    return this.profileSubject.value;
  }

  public get profileRoles() {
    return this.profileValue?.Role!;
  }

  public login(Email: string, Password: string) {
    return this.http
      .post<IProfile>(
        `${this.baseUrl}/login`,
        { Email, Password },
        { withCredentials: true }
      )
      .pipe(
        map(profile => {
          localStorage.setItem('user', JSON.stringify(profile));
          this.profileSubject.next(profile);
          return profile;
        })
      );
  }

  public logout() {
    localStorage.removeItem('user');
    this.profileSubject.next(null);
    this.router.navigate(['/auth/login']);
  }

  public updateProfile(profile: TProfileServerModel) {
      return this.http
          .put<IProfile>(
              `${this.baseUrl}/users/${profile.Id}`,
              { ...profile },
              { withCredentials: true }
          )
          .pipe(
              map(profile => {
                  localStorage.setItem('user', JSON.stringify(profile));
                  this.profileSubject.next(profile);
                  return profile;
              })
          );
  }
}
