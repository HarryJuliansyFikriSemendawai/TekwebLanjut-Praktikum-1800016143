import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialDesign } from '../material/material';
import { ImagesComponent } from './images/images.component';

const routes: Routes = [
{
  path:'',
  component:AdminComponent,
  children:[
    {
      path:'dashboard',
      component:DashboardComponent
    }
  ]
}
]

@NgModule({
  declarations: [AdminComponent,DashboardComponent, ImagesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesign
  ]
})
export class AdminModule { }
