import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {KeyValue} from '@app/app_models/keyValue';
import {environment} from '@environments/environment';
import {HttpClientCMSService} from '@app/shared/http-client-cms.service';

@Injectable({
  providedIn: 'root'
})
export class KeyValuesService {

  constructor(private http: HttpClientCMSService) {
  }

  addKeyValue(keyValue: Object): Observable<Object> {
    return this.http.post(`${environment.cmsBackEndServiceUrl}/keyValue/create`, keyValue);
  }

  getAllKeyValue(userId: number): Observable<any> {
    return this.http.get(`${environment.cmsBackEndServiceUrl}/keyValue/getForUser/${userId}`);
  }

  deleteKeyValue(keyValues: KeyValue): Observable<any> {
    return this.http.post(`${environment.cmsBackEndServiceUrl}/keyValue/delete`, keyValues);
  }

  getKeyValueById(id: number): Observable<any> {
    return this.http.get(`${environment.cmsBackEndServiceUrl}/keyValue/${id}`);
  }

  updateKeyValue(keyValue: KeyValue): Observable<Object> {
    return this.http.post(`${environment.cmsBackEndServiceUrl}/keyValue/edit`, keyValue);
  }

}
