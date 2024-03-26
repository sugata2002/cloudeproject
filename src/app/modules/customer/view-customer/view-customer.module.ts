import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewCustomerComponent } from './view-customer.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ColorPickerModule } from 'ngx-color-picker';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { RouterModule } from '@angular/router';
import { ViewCustomerRoutes } from './view-customer.routing';
import { MatTableModule } from "@angular/material/table";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatIconModule } from "@angular/material/icon";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [
    ViewCustomerComponent
  ],
  imports: [
    RouterModule.forChild(ViewCustomerRoutes),
    CommonModule,
    SharedModule,
    NgbDropdownModule,
    ColorPickerModule,
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    FlexLayoutModule
  ]
})
export class ViewCustomerModule { }
