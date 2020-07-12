import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Customer} from '../../../app_models/customer';
import {CustomerService} from '../../../app_services/customer.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '@app/app_services';
import {User} from '@app/app_models';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();
  private customersList: Observable<Customer[]>;
  currentUser: User;
  currentUserSubscription: Subscription;
  customerTableHeader: string [] = ['Actions', 'First Name', 'Last Name', 'Address ', 'Pin Code', 'Email', 'Mobile No', 'Login Name', 'User Role'];

  constructor(
    private customerService: CustomerService,
    private authenticationService: AuthenticationService,
    private router: Router) {
      this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }

  ngOnInit() {
    this.reLoadData();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  reLoadData() {
    this.customersList = this.customerService.getAllCustomers(this.currentUser.id);
  }

  deleteCustomer(customer: Customer) {
    if (confirm('Are you sure to delete ' + customer.firstName)) {
      this.subscription = this.customerService.deleteCustomer(customer).subscribe(
        data => {
          this.reLoadData();
        },
        error => {
          console.log(error);
        });
    }
  }

  navigateToCustomerDetails(customer: Customer) {
    this.router.navigate(['/customer-edit', customer.id]);
  }

  showDialog(customer: Customer) {
    // this.confirmDialogService.confirmThis('Are you sure to delete?', function () {
    //   console.log('yes selected' + customer.firstName);
    // }, function () {
    //   console.log('no selected');
    // });
  }
}
