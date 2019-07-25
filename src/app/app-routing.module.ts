import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KitchenComponent } from './kitchen/kitchen.component';
import { HomeComponent } from './home/home.component';
import { GrillComponent } from './grill/grill.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'kitchen',
    component: KitchenComponent
  },
  {
    path: 'grill',
    component: GrillComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
