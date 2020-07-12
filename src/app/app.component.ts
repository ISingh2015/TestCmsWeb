﻿import {Component, HostListener} from '@angular/core';
import {Router} from '@angular/router';

import {AuthenticationService} from './app_services';
import {User} from './app_models';

@Component({selector: 'app-cms', templateUrl: 'app.component.html'})
export class AppComponent {
  currentUser: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
