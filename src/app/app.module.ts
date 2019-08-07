import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
// used to create fake backend
import {ErrorInterceptor, fakeBackendProvider, JwtInterceptor} from './app_helpers';

import {AppComponent} from './app.component';
import {routing} from './app.routing';

import {AlertComponent} from './app_components/alert';
import {HomeComponent} from './app_components/home';
import {LoginComponent} from './app_components/login';
import {RegisterComponent} from './app_components/register';
import {CustomerListComponent} from './app_components/customer/customer-list/customer-list.component';
import {CustomerNewComponent} from './app_components/customer/customer-new/customer-new.component';
import {CustomerEditComponent} from './app_components/customer/customer-edit/customer-edit.component';
import {CustomerService} from '@app/app_services/customer.service';
import {ImagesListComponent} from './app_components/image/image-list/images-list.component';
import {VideosListComponent} from './app_components/video/video-list/videos-list.component';
import {VideoNewComponent} from './app_components/video/video-new/video-new.component';
import {ImageNewComponent} from './app_components/image/image-new/image-new.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ConfirmDialogService} from '@app/app_services/confirm-dialog.service';
import {ConfirmDialogModule} from '@app/shared/confirm-dialog/confirm-dialog.module';
import {FileUploadModule} from 'ng2-file-upload';
import {KeyValueListComponent} from './app_components/keyvalues/keyvalue-list/key-value-list.component';
import {KeyValueAddComponent} from './app_components/keyvalues/keyValue-add/key-value-add.component';
import {KeyValuesService} from '@app/app_services/key-values.service';
import {CKEditorModule} from 'ng2-ckeditor';
import {KeyValueEditComponent} from './app_components/keyvalues/keyvalue-edit/key-value-edit.component';
import {FooterComponent} from '@app/app_components/footer/footer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {GoTopButtonModule} from 'ng2-go-top-button';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GoTopButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ConfirmDialogModule,
    FileUploadModule,
    CKEditorModule,
    routing],
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    CustomerListComponent,
    CustomerNewComponent,
    CustomerEditComponent,
    VideosListComponent,
    ImagesListComponent,
    ImageNewComponent,
    VideoNewComponent,
    KeyValueListComponent,
    KeyValueAddComponent,
    KeyValueEditComponent],

  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},

    // provider used to create fake backend
    fakeBackendProvider,
    CustomerService,
    KeyValuesService,
    ConfirmDialogService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
