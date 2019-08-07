import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Customer} from '@app/app_models/customer';
import {environment} from '@environments/environment';
import {HttpClientCMSService} from '@app/shared/http-client-cms.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private http: HttpClientCMSService) {
  }

  getAllCustomers(id: number): Observable<any> {
    return this.http.get(`${environment.cmsBackEndServiceUrl}/customer/getForUser/${id}`);
  }

  getCustomerById(id: number): Observable<any> {
    return this.http.get(`${environment.cmsBackEndServiceUrl}/customer/${id}`);
  }

  addCustomer(customer: Object): Observable<Object> {
    return this.http.post(`${environment.cmsBackEndServiceUrl}/customer/create`, customer);
  }

  updateCustomer(customer: Customer): Observable<Object> {
    return this.http.put(`${environment.cmsBackEndServiceUrl}/customer/edit`, customer);
  }

  deleteCustomer(customer: Customer): Observable<any> {
    return this.http.post(`${environment.cmsBackEndServiceUrl}/customer/delete`, customer);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure, create new service
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
