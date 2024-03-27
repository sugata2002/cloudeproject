import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss'],
})
export class CustomerAddComponent {
  customerName: string = '';
  customerEmail: string = '';
  customerPhone: string = '';
  addressStreet: string = '';
  addressCity: string = '';
  addressPin: string = '';
  addressState: string = '';
  addressCountry: string = '';
  statusSuccess:boolean = false;
  statusFail:boolean = false;
  errorMsg: string = '';

  constructor(
    private service: CustomerService,
  ){

  }

  onSubmit() {
    const body = Object({
      name: this.customerName,
      email: this.customerEmail,
      phone: this.customerPhone,
      address: Object({
        street: this.addressStreet,
        city: this.addressCity,
        pincode: this.addressPin,
        state: this.addressState,
        country: this.addressCountry
      })
    });

    this.service.postCustomer(body).subscribe(
      (success) => {
        if (success.success) {
          this.statusSuccess = true;
          // this.snackbar.openSuccessSnackBar(("Customer successfully added. "));
        } else {
          this.statusFail = true
          this.errorMsg = success.msg??'HTTP ERROR!'
          // this.snackbar.openErrorSnackBar(success.msg);
        }
      },
      (error) => {

      },
    );
    setTimeout(() => {
      this.statusSuccess = false; // Change the value to whatever you need
      this.statusFail = false;
    }, 5000);
  }
}