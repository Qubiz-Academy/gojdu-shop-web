import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  {
    path:'',
    component:ListComponent
  },
  {
    path:'Edit/:id',
    component:EditComponent
  },
  {
    path:'Create',
    component:CreateComponent
  },
  {
    path:'Details/:id',
    component:DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
