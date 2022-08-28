import { APP_INITIALIZER, NgModule } from '@angular/core';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PupupComponent } from './shared/components/pupup/pupup.component';
import { AppConfigService } from './shared/initilizers/env-variables/app-config.service';
import { ProfileService } from './shared/services/tasks-api/profile/profile.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export function initilizeLink(endpoints: AppConfigService): any {
  return () => endpoints.loadConfig();
}
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
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initilizeLink,
    deps: [AppConfigService],
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
