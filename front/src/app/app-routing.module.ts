import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustosComponent } from './custos/custos.component';
import { CustoNewComponent } from './custos/custo-new/custo-new.component';
import { CustoEditComponent } from './custos/custo-edit/custo-edit.component';
import { CustoDeleteComponent } from './custos/custo-delete/custo-delete.component';

import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '', redirectTo: 'custos', pathMatch: 'full' },
  { path: 'custos', component: CustosComponent },
  { path: 'custos/custo-new', component: CustoNewComponent },
  { path: 'custos/custo-edit/:id', component: CustoEditComponent },
  { path: 'custos/custo-delete/:id', component: CustoDeleteComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
