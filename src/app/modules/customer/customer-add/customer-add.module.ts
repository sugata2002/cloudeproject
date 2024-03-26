import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerAddComponent } from './customer-add.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ColorPickerModule } from 'ngx-color-picker';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { RouterModule } from '@angular/router';
import { CustomerAddRoutes } from './customer-add.routing';



@NgModule({
  declarations: [
    CustomerAddComponent
  ],
  imports: [
    RouterModule.forChild(CustomerAddRoutes),
    CommonModule,
    SharedModule,
    NgbDropdownModule,
    ColorPickerModule
  ]
})
export class CustomerAddModule { }
