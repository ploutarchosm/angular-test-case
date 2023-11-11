import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { IProfile } from '../../app/profile';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private profileSubject!: BehaviorSubject<IProfile | null>;
  public profile!: Observable<IProfile | null>;

  protected baseUrl = `${environment.apiUrl}/login`;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.profileSubject = new BehaviorSubject<IProfile | null>(null);
    this.profile = this.profileSubject.asObservable();
  }

  public get profileValue() {
    return this.profileSubject.value;
  }

  public login(email: string, password: string) {
    return this.http
      .post<any>(
        `${this.baseUrl}/authenticate`,
        { email, password },
        { withCredentials: true }
      )
      .pipe(
        map(profile => {
          this.profileSubject.next(profile);
          return profile;
        })
      );
  }

  public logout() {}
}
