import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';

export const routes: Routes = [
  {path:"home",component:ListComponent},
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"add",component:AddComponent},
  {path:"update/:id",component:UpdateComponent}
];
