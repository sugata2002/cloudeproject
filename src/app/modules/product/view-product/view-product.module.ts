import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProductComponent } from './view-product.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ColorPickerModule } from 'ngx-color-picker';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { ViewProductRoutes } from './view-product.routing';



@NgModule({
  declarations: [
    ViewProductComponent
  ],
  imports: [
    RouterModule.forChild(ViewProductRoutes),
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
export class ViewProductModule { }
