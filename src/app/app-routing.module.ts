import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { JavascriptBasicComponent } from './features/javascript/javascript-basic/javascript-basic.component';

const routes: Routes = [
    {path:'', pathMatch:'full', redirectTo:'/dashboard'},
    {path:'dashboard', component:DashboardComponent},
    {path:'javascript-basic', component:JavascriptBasicComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
