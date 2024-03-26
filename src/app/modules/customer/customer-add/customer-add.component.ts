import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiComponent } from 'src/app/api/api/api.component';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss'],
  providers: [CustomerService]
})
export class CustomerAddComponent implements OnInit {
  customerName: string = '';
  customerEmail: string = '';
  customerPhone: string = '';
  addressStreet: string = '';
  addressCity: string = '';
  addressPin: string = '';
  addressState: string = '';
  addressCountry: string = '';
  from!: FormGroup;
  // form: any;

  constructor(
    private service: CustomerService,
    private frombuilder: FormBuilder,
    private apicom: ApiComponent
  ) {}
  ngOnInit(): void {
    this.from = this.frombuilder.group({
      name: '',
      email: '',
      phone: '',
      address: this.frombuilder.group({
        street: '',
        city: '',
        pincode: '',
        state: '',
        country: ''
      })
    });
  }

  subit() {
    const users = this.from.getRawValue();
    console.log(users);
    this.apicom.addcustomer(users);
  }
}
