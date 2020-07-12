import {Component, OnInit} from '@angular/core';
import {Customer} from '../../../app_models/customer';
import {CustomerService} from '../../../app_services/customer.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '@app/app_services';
import {User} from '@app/app_models';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrls: ['./customer-new.component.css']
})

export class CustomerNewComponent implements OnInit {
  title = 'New Customer';
  currentUser: User;
  currentUserSubscription: Subscription;

  customer: Customer;
  submitted: boolean;

  constructor(
    private customerService: CustomerService,
    private authenticationService: AuthenticationService,
    private router : Router) {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }

  ngOnInit() {
    this.newCustomer();
  }

  newCustomer(): void {
    this.submitted = false;
    this.customer = new Customer();
    this.customer.userId = this.currentUser.id;
  }

  save() {
    this.customerService.addCustomer(this.customer)
      .subscribe(data => {
          this.router.navigate(['/customer-list']);
        },
        error => {
          console.log(error);
        });
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
