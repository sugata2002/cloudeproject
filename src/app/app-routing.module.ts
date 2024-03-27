// Angular Import
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// project import
import { AdminComponent } from './theme/layout/admin/admin.component';
import { GuestComponent } from './theme/layout/guest/guest.component';
// import { authgardGuard } from './authgard.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/signin',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AdminComponent,
    // canActivate:[authgardGuard],
    children: [
      // {
      //   path: '',
      //   redirectTo: '/analytics',
      //   pathMatch: 'full'
      // },
      {
        path: 'analytics', 
        loadComponent: () => import('./demo/dashboard/dash-analytics/dash-analytics.component')
      },
      {
        path: 'component',
        loadChildren: () => import('./demo/ui-element/ui-basic.module').then((m) => m.UiBasicModule)
      },
      {
        path: 'chart',
        loadComponent: () => import('./demo/chart & map/core-apex/core-apex.component')
      },
      // {
      //   path: 'add-customers',
      //   loadComponent: () => import('./demo/forms & tables/form-elements/form-elements.component')
      // },
      {
        path: 'add-customers',
        loadChildren: () => import('./modules/customer/customer-add/customer-add.module').then(m => m.CustomerAddModule)
      },
      {
        path: 'view-customers',
        loadChildren: () => import('./modules/customer/view-customer/view-customer.module').then(m => m.ViewCustomerModule)
      },
      {
        path: 'add-category',
        loadChildren: () => import('./modules/category/add-category/add-category.module').then(m => m.AddCategoryModule)
      },
      {
        path: 'view-category',
        loadChildren: () => import('./modules/category/view-category/view-category.module').then(m => m.ViewCategoryModule)
      },
      {
        path: 'add-product',
        loadChildren: () => import('./modules/product/add-product/add-product.module').then(m => m.AddProductModule)
      },
      {
        path: 'view-product',
        loadChildren: () => import('./modules/product/view-product/view-product.module').then(m => m.ViewProductModule)
      },
      {
        path: 'tables',
        loadComponent: () => import('./demo/forms & tables/tbl-bootstrap/tbl-bootstrap.component')
      },
      {
        path: 'sample-page',
        loadComponent: () => import('./demo/sample-page/sample-page.component')
      }
    ]
  },
  {
    path: '',
    component: GuestComponent,
    children: [
      {
        path: 'auth/signup',
        loadComponent: () => import('./demo/authentication/sign-up/sign-up.component'),
      },
      {
        path: 'auth/signin',
        loadComponent: () => import('./demo/authentication/sign-in/sign-in.component')
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
