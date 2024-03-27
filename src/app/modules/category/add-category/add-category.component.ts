import { Component } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent {
  categoryTitle: string = '';
  statusSuccess:boolean = false;
  statusFail:boolean = false;
  errorMsg: string = '';
  
  constructor(
    private service: CategoryService,
  ){

  }

  onSubmit() {
    const body = Object({
      title: this.categoryTitle,
    });

    this.service.postCategory(body).subscribe(
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
