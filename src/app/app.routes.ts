import { Routes } from '@angular/router';
import { HomepageComponent } from './page/homepage/homepage.component';
import { ProductComponent } from './page/product/product.component';

export const routes: Routes = [
  {path:'',
   component: HomepageComponent
  },
  {
    path: 'product',
    component:ProductComponent
  }
];
