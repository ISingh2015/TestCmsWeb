import {Component, OnInit} from '@angular/core';
import {Customer} from '@app/app_models/customer';
import {CustomerService} from '@app/app_services/customer.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customer: Customer;

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute) {
    this.customer = new Customer();
  }

  ngOnInit() {
    this.getCustomerDetails(this.route.snapshot.params['id']);
  }

  saveCustomerDetails() {
    this.customerService.updateCustomer(this.customer)
      .subscribe(data => {
          this.router.navigate(['/customer-list']);
        },
        error => {
          console.log(error);
        });
  }

  getCustomerDetails(id: number) {
    this.customerService.getCustomerById(id).subscribe(data => {
        this.customer = data;
      },
      error => {
        console.log(error);
      });

  }

  onSubmit() {
    this.saveCustomerDetails();
  }
}
