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

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    DashboardComponent,
    JavascriptBasicComponent,
    JavascriptComponent,
    JavascriptAdvancedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
