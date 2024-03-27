import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ColorPickerModule } from 'ngx-color-picker';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { AddProductRoutes } from './add-product.routing';



@NgModule({
  declarations: [
    AddProductComponent
  ],
  imports: [
    RouterModule.forChild(AddProductRoutes),
    CommonModule,
    SharedModule,
    NgbDropdownModule,
    ColorPickerModule,
    MatSnackBarModule 
  ]
})
export class AddProductModule { }
