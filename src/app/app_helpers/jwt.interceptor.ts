import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

import {AuthenticationService} from '@app/app_services';
import {User} from '@app/app_models';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  currentUser: User;

  constructor(private authenticationService: AuthenticationService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    this.currentUser = this.authenticationService.currentUserValue;
    if (this.currentUser && this.currentUser.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.currentUser.token}`
        }
      });
    }

    return next.handle(request);
  }
}
