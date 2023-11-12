import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, materialize, dematerialize } from 'rxjs/operators';
import { IProfile, Role } from '../app/profile';

interface IUsers extends IProfile {
  Id: number;
  Password: string;
}

const users: IUsers[] = [
  {
    Id: 1,
    FirstName: 'Basile',
    LastName: 'Balkwill',
    Email: 'bbalkwill0@ihg.com',
    PhoneNumber: '+76122570337',
    WebSiteURL: 'https://weather.com',
    Password: '1234',
    Role: Role.Admin,
  },
  {
    Id: 2,
    FirstName: 'Edsel',
    LastName: 'Guyonneau',
    Email: 'eguyonneau1@bravesites.com',
    PhoneNumber: '+76843632917',
    WebSiteURL: 'https://about.com',
    Password: '1234',
    Role: Role.User,
  },
];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;

    return handleRoute();

    function handleRoute() {
      switch (true) {
        case url.endsWith('/auth/login') && method === 'POST':
          return authenticate();
        case url.match(/\/users\/\d+$/) && method === 'PUT':
          return updateUser();
        default:
          return next.handle(request);
      }
    }

    function authenticate() {
      const { Email, Password } = body;
      const user = users.find(
        x => x.Email === Email && x.Password === Password
      );
      if (!user) return error('Username or password is incorrect');
      return ok({
        ...basicDetails(user),
        AuthToken: 'fake-jwt-token',
      });
    }

    function updateUser() {
      if (!isLoggedIn()) return unauthorized();

      let params = body;
      let user = users.find(x => x.Id === idFromUrl());

      if (!user) return error('Username not found..');

      user.FirstName = params.FirstName;
      user.LastName = params.LastName;
      user.PhoneNumber = params.PhoneNumber;
      user.WebSiteURL = params.WebSiteURL;
      return ok({
        ...basicDetails(user),
        AuthToken: 'fake-jwt-token',
      });
    }

    function ok(body?: any) {
      return of(new HttpResponse({ status: 200, body })).pipe(delay(500));
    }

    function error(message: string) {
      return throwError(() => ({ error: { message } })).pipe(
        materialize(),
        delay(500),
        dematerialize()
      );
    }

    function unauthorized() {
      return throwError(() => ({
        status: 401,
        error: { message: 'Unauthorized' },
      })).pipe(materialize(), delay(500), dematerialize());
    }

    function basicDetails(user: IUsers) {
      const { Id, Email, FirstName, LastName, PhoneNumber, WebSiteURL, Role } =
        user;
      return { Id, Email, FirstName, LastName, PhoneNumber, WebSiteURL, Role };
    }

    function getUserById() {
      if (!isLoggedIn()) return unauthorized();

      const user = users.find(x => x.Id === idFromUrl());

      if (user) {
        return ok(basicDetails(user));
      } else {
        return error('Not found....');
      }
    }

    function isLoggedIn() {
      return headers.get('Authorization') === 'Bearer fake-jwt-token';
    }

    function idFromUrl() {
      const urlParts = url.split('/');
      return parseInt(urlParts[urlParts.length - 1]);
    }
  }
}

export const fakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true,
};
