import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCategoryComponent } from './add-category.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ColorPickerModule } from 'ngx-color-picker';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { AddCategoryRoutes } from './add-category.routing';



@NgModule({
  declarations: [
    AddCategoryComponent
  ],
  imports: [
    RouterModule.forChild(AddCategoryRoutes),
    CommonModule,
    SharedModule,
    NgbDropdownModule,
    ColorPickerModule,
    MatSnackBarModule
  ]
})
export class AddCategoryModule { }
