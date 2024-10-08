import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteGuardService } from '../services/route-guard.service';
import { ManageCategoryComponent } from './manage-category/manage-category.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { ManageOrderComponent } from './manage-order/manage-order.component';
import { ViewBillComponent } from './view-bill/view-bill.component';
import { ManageUserComponent } from './manage-user/manage-user.component';

// const routes: Routes = [];

export const MaterialRoutes: Routes = [
  {
    path:'category',
    component:ManageCategoryComponent,
    canActivate:[RouteGuardService],
    data:{
      expectedRole:['admin']
    }
  },

  {
    path:'product',
    component:ManageProductComponent,
    canActivate:[RouteGuardService],
    data:{
      expectedRole:['admin']
    }
  },
  {
    path:'order',
    component:ManageOrderComponent,
    canActivate:[RouteGuardService],
    data:{
      expectedRole:['admin','user']
    }
  },
  {
    path:'bill',
    component:ViewBillComponent,
    canActivate:[RouteGuardService],
    data:{
      expectedRole:['admin','user']
    }
  },
  {
    path:'user',
    component:ManageUserComponent,
    canActivate:[RouteGuardService],
    data:{
      expectedRole:['admin']
    }
  },


]

@NgModule({
  imports: [RouterModule.forChild(MaterialRoutes)],
  exports: [RouterModule]
})
export class MaterialRoutingModule { }
