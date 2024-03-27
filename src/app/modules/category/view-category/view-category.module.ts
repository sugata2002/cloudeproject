import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewCategoryComponent } from './view-category.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ColorPickerModule } from 'ngx-color-picker';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { ViewCategoryRoutes } from './view-category.routing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';



@NgModule({
  declarations: [
    ViewCategoryComponent
  ],
  imports: [
    RouterModule.forChild(ViewCategoryRoutes),
    CommonModule,
    SharedModule,
    NgbDropdownModule,
    ColorPickerModule,
    MatSnackBarModule,
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    FlexLayoutModule
  ]
})
export class ViewCategoryModule { }
