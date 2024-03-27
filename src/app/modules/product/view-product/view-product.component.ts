import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent {
  displayedColumns: string[] = ["productName", "purchasePrice", "sellingPrice", "stock", "category", "actions"];
  dataSource!: MatTableDataSource<any>;
  matTable = true;
  loadProgress = false;
  errorMessage: string = '';
  isMobile = true;

  constructor(
    private service: ProductService,
  ) {}

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(): void {
    this.loadProgress = true;
    this.service.getProduct().subscribe(
      (success) => {
        try {
          if (success.success) {
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
      this.service.deleteProduct(id).subscribe((success) => {
        if (success.status) {
          this.onRefresh();
        }
      });
    }
    window.location.reload();
  }

  loadData(data: any): void {
    try {
      if (data && data.length) {
        for (let i = 0; i < data.length; i++) {
          data[i].title_text = "N/A";
          data[i].purchase_price_text = "N/A";
          data[i].selling_price_text = "N/A";
          data[i].stock_text = "N/A";
          data[i].category_text = "N/A";

          if (data[i].title && data[i].title.length) {
            data[i].title_text = data[i].title;
          }
          if (data[i].purchase_price && data[i].purchase_price.length) {
            data[i].purchase_price_text = data[i].purchase_price;
          }
          if (data[i].selling_price && data[i].selling_price.length) {
            data[i].selling_price_text = data[i].selling_price;
          }
          if (data[i].stock && data[i].stock.length) {
            data[i].stock_text = data[i].stock;
          }
          if (data[i].productcatagory.length){
            data[i].category_text = data[i].productcatagory[0].title;
          }
        }
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
