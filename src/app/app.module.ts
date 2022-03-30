import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginPageComponent } from './features/login-page/login-page.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { MaterialModule } from '../app/shared/material/material.module';
import { JavascriptComponent } from './features/javascript/javascript/javascript.component';
import { JavascriptAdvancedComponent } from './features/javascript/javascript-advanced/javascript-advanced.component';
import { JavascriptBasicComponent } from './features/javascript/javascript-basic/javascript-basic.component';
import { ReausableComponentsComponent } from './features/angular/reausable-components/reausable-components.component';
import { BasicComponent } from './features/angular/basic/basic.component';
import { DataTablesModule } from "angular-datatables";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PupupComponent } from './shared/components/pupup/pupup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    DashboardComponent,
    JavascriptBasicComponent,
    JavascriptComponent,
    JavascriptAdvancedComponent,
    ReausableComponentsComponent,
    BasicComponent,
    PupupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
