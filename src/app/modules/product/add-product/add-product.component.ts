import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit{
  categories = [];
  productName: string = '';
  categoryId: string = '';
  purchasePrice: string = '';
  sellingPrice: string = '';
  stock: string = '';
  statusSuccess:boolean = false;
  statusFail:boolean = false;
  errorMsg: string = '';

  constructor(
    private service: ProductService,
  ){

  }
  ngOnInit(): void {
    this.getCategory()
  }

  getCategory(): void {
    this.service.getCategory().subscribe(
      (success) => {
        try {
          if (success.success) {
            this.categories = success.data;
          } else {
            this.categories = [];
          }
        } catch (e) {
          this.categories = [];
        }
      },
      (error) => {
        this.categories = [];
        // this.snackbar.openErrorSnackBar(
        //   error.status + ": HTTP ERROR IN GET ADMIN",
        // );
      },
    );
  }

  onSubmit() {
    const body = Object({
      title: this.productName,
      category: this.categoryId,
      purchase_price: this.purchasePrice,
      selling_price: this.sellingPrice,
      stock: this.stock
    });

    this.service.postProduct(body).subscribe(
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
