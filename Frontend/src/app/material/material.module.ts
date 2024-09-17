import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialRoutingModule } from './material-routing.module';
import { ViewBillProductsComponent } from './view-bill-products/view-bill-products.component';
import { MatModule } from '../shared/mat-module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CdkTableModule } from '@angular/cdk/table';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ManageCategoryComponent } from './manage-category/manage-category.component';
import { CategoryComponent } from './category/category.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { ProductComponent } from './product/product.component';
import { ManageOrderComponent } from './manage-order/manage-order.component';
import { ViewBillComponent } from './view-bill/view-bill.component';
import { ManageUserComponent } from './manage-user/manage-user.component';


@NgModule({
  declarations: [
    ViewBillProductsComponent,
    ConfirmationComponent,
    ChangePasswordComponent,
    ManageCategoryComponent,
    CategoryComponent,
    ManageProductComponent,
    ProductComponent,
    ManageOrderComponent,
    ViewBillComponent,
    ManageUserComponent
  ],
  imports: [
    CommonModule,
    MaterialRoutingModule,
    MatModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule,
    MatDialogModule

  ]
})
export class MaterialModule { }
