import { Routes } from '@angular/router';
import { ListComponent } from './product/list/list.component';
import { ViewComponent } from './product/view/view.component';
import { UpdateComponent } from './product/update/update.component';
import { AddComponent } from './product/add/add.component';
import { CartComponent } from './product/cart/cart.component';
import { ListProductsComponent } from './databasetesting/list-products/list-products.component';

export const routes: Routes = [
  {path:"",component:ListComponent},
  {path:"add",component:AddComponent},
  {path:"update/:id",component:UpdateComponent},
  {path:"view/:id",component:ViewComponent},
  {path:"cart",component:CartComponent}
];

export const routerComponent=[ListComponent,AddComponent,UpdateComponent,ViewComponent]


