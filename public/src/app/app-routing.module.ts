import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { RootComponent } from './root/root.component';

const routes: Routes = [
  // { path: '**', redirectTo: 'pets'},
  { path: 'pets/new', component: CreateComponent },
  { path: 'pets/:id', component: DetailsComponent },
  { path: 'pets/edit/:id', component: EditComponent },
  { path: 'pets', component: RootComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
