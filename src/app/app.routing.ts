import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './app_components/home';
import {LoginComponent} from './app_components/login';
import {RegisterComponent} from './app_components/register';
import {AuthGuard} from './app_guards';
import {CustomerListComponent} from '@app/app_components/customer/customer-list/customer-list.component';
import {CustomerNewComponent} from '@app/app_components/customer/customer-new/customer-new.component';
import {ImagesListComponent} from '@app/app_components/image/image-list/images-list.component';
import {VideosListComponent} from '@app/app_components/video/video-list/videos-list.component';
import {CustomerEditComponent} from '@app/app_components/customer/customer-edit/customer-edit.component';
import {ImageNewComponent} from '@app/app_components/image/image-new/image-new.component';
import {VideoNewComponent} from '@app/app_components/video/video-new/video-new.component';
import {KeyValueListComponent} from '@app/app_components/keyvalues/keyvalue-list/key-value-list.component';
import {KeyValueAddComponent} from '@app/app_components/keyvalues/keyValue-add/key-value-add.component';
import {KeyValueEditComponent} from '@app/app_components/keyvalues/keyvalue-edit/key-value-edit.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'customer-list', component: CustomerListComponent, canActivate: [AuthGuard]},
  {path: 'customer-edit/:id', component: CustomerEditComponent, canActivate: [AuthGuard]},
  {path: 'customer-add', component: CustomerNewComponent, canActivate: [AuthGuard]},
  {path: 'images-list', component: ImagesListComponent, canActivate: [AuthGuard]},
  {path: 'image-add', component: ImageNewComponent, canActivate: [AuthGuard]},
  {path: 'videos-list', component: VideosListComponent, canActivate: [AuthGuard]},
  {path: 'video-add', component: VideoNewComponent, canActivate: [AuthGuard]},
  {path: 'kv-list', component: KeyValueListComponent, canActivate: [AuthGuard]},
  {path: 'kv-add', component: KeyValueAddComponent, canActivate: [AuthGuard]},
  {path: 'kv-edit/:id', component: KeyValueEditComponent, canActivate: [AuthGuard]},
  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes,  {useHash: true, scrollPositionRestoration: 'enabled' });
