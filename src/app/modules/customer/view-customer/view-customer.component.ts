import { Component } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.scss']
})
export class ViewCustomerComponent {
  displayedColumns: string[] = ["fullName", "phoneNumber", "email", "actions"];
  dataSource!: MatTableDataSource<any>;
  matTable = true;
  loadProgress = false;
  errorMessage: string = '';
  isMobile = true;

  constructor(
    // private snackbar: SnackBarHandler,
    private service: CustomerService,
  ) {}

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(): void {
    this.loadProgress = true;
    this.service.getCustomer().subscribe(
      (success) => {
        try {
          if (success.success) {
            console.log("customer data ===> ",success.data);
            this.loadData(success.data);
          } else {
            this.matTable = false;
            this.errorMessage = success.message.toUpperCase();
          }
        } catch (e) {
          this.matTable = false;
          this.errorMessage = "INVALID RESPONSE";
        }
        this.loadProgress = false;
      },
      (error) => {
        this.loadProgress = false;
        // this.snackbar.openErrorSnackBar(
        //   error.status + ": HTTP ERROR IN GET ADMIN",
        // );
      },
    );
  }

  onDelete(id: any): void {
    if (window.confirm("Are you sure you want to delete?")) {
      this.service.deleteCustomer(id).subscribe((success) => {
        if (success.status) {
          this.onRefresh();
        }
      });
    }
  }

  loadData(data: any): void {
    try {
      if (data && data.length) {
        for (let i = 0; i < data.length; i++) {
          data[i].name_text = "N/A";
          data[i].phoneNumber_text = "N/A";
          data[i].email_text = "N/A";
          if (data[i].name && data[i].name.length) {
            data[i].name_text = data[i].name;
          }
          if (data[i].phone && data[i].phone.length) {
            data[i].phoneNumber_text = data[i].phone;
          }
          if (data[i].email && data[i].email.length) {
            data[i].email_text = data[i].email;
          }
        }
        console.log("customer table data ==> ",data);
        this.matTable = true;
        this.dataSource = new MatTableDataSource<any>(data);
      } else {
        this.matTable = false;
        this.dataSource = new MatTableDataSource<any>([]);
        this.errorMessage = "NO DATA AVAILABLE";
      }
    } catch (e) {
      this.matTable = false;
      this.errorMessage = "DATA LOAD ERROR";
    }
  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onRefresh(): void {
    this.getCustomers();
  }

  // onDelete(id: any): void {
  //   if (window.confirm("Are you sure you want to delete?")) {
  //     this.service.deleteAdmins(id).subscribe((success) => {
  //       if (success.status) {
  //         this.onRefresh();
  //       }
  //     });
  //   }
  // }

}
